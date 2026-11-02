const http = require('node:http');
const nodemailer = require('nodemailer');

const PORT = Number(process.env.API_PORT || 3000);
const RECIPIENT = 'swatiyadawar29@gmail.com';
const MAX_BODY_BYTES = 10_000;
const recentRequests = new Map();

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = '';
    let size = 0;
    request.on('data', (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        reject(Object.assign(new Error('Request too large'), { statusCode: 413 }));
        request.destroy();
        return;
      }
      body += chunk;
    });
    request.on('end', () => {
      try { resolve(JSON.parse(body)); }
      catch { reject(Object.assign(new Error('Invalid JSON'), { statusCode: 400 })); }
    });
    request.on('error', reject);
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

function sendJson(response, status, payload) {
  response.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' });
  response.end(JSON.stringify(payload));
}

const server = http.createServer(async (request, response) => {
  if (request.method === 'GET' && request.url === '/api/health') return sendJson(response, 200, { ok: true });
  if (request.method !== 'POST' || request.url !== '/api/reservations') return sendJson(response, 404, { message: 'Not found.' });

  const clientKey = request.socket.remoteAddress || 'unknown';
  const lastRequest = recentRequests.get(clientKey) || 0;
  if (Date.now() - lastRequest < 15_000) return sendJson(response, 429, { message: 'Please wait a moment before sending another request.' });

  try {
    const form = await readBody(request);
    const fields = ['name', 'email', 'phone', 'location', 'coffee', 'seating'];
    const values = Object.fromEntries(fields.map((field) => [field, String(form?.[field] ?? '').trim()]));
    values.notes = String(form?.notes ?? '').trim();
    if (fields.some((field) => !values[field]) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      return sendJson(response, 400, { message: 'Please provide a valid name, email, phone, location, coffee, and seating preference.' });
    }
    if (Object.values(values).some((value) => value.length > 1200)) return sendJson(response, 400, { message: 'One or more fields are too long.' });
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return sendJson(response, 503, { message: 'Reservation email is not configured yet. Please contact the café directly.' });
    }

    const port = Number(process.env.SMTP_PORT || 587);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: process.env.SMTP_SECURE === 'true' || port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
    const safe = Object.fromEntries(Object.entries(values).map(([key, value]) => [key, escapeHtml(value)]));
    const rows = [
      ['Name', safe.name], ['Email', safe.email], ['Phone', safe.phone], ['Café', safe.location],
      ['Coffee', safe.coffee], ['Seating', safe.seating], ['Notes', safe.notes || '—'],
    ];
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: RECIPIENT,
      replyTo: values.email,
      subject: `New Coffee Shop reservation — ${values.name}`,
      text: rows.map(([label, value]) => `${label}: ${value}`).join('\n'),
      html: `<h2>New reservation request</h2><table>${rows.map(([label, value]) => `<tr><th align="left" style="padding:6px 16px 6px 0">${label}</th><td style="padding:6px 0">${value}</td></tr>`).join('')}</table>`,
    });
    recentRequests.set(clientKey, Date.now());
    return sendJson(response, 200, { message: 'Your reservation request has been emailed to the café.' });
  } catch (error) {
    const status = error.statusCode || 500;
    if (status >= 500) console.error('Reservation email failed:', error.message);
    return sendJson(response, status, { message: status === 500 ? 'We could not send your reservation right now. Please try again shortly.' : error.message });
  }
});

server.listen(PORT, () => console.log(`Reservation API listening on http://localhost:${PORT}`));
