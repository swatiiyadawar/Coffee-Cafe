# Coffee Shop Angular app

Angular recreation of the original Coffee Shop HTML/CSS/JS website. The app uses standalone components and Angular Router, with Tailwind CSS v4 available alongside the original responsive visual stylesheet.

## Run locally

```bash
npm install
cp .env.example .env
npm run start:api
```

In a second terminal, run `npm start` for Angular. Add SMTP credentials supplied by your mail provider to `.env` before submitting a reservation. The server keeps the SMTP credentials private and always sends the reservation to `swatiyadawar29@gmail.com`; the customer’s email is used only as the reply-to address.

For production, deploy the Node API as a Render or Railway web service. Set `PORT` (provided by the host), `FRONTEND_ORIGIN` (the exact frontend URL), and the SMTP variables in the host’s secret environment variables. Update `API_BASE_URL` in `src/app/shared/api.config.ts` to the deployed API URL plus `/api`, then rebuild the Angular frontend. The local `/api` value works with `proxy.conf.json` during development.

## Routes

- `/` — home page, including the FAQ
- `/about` — story and brand values
- `/menu` — full coffee menu
- `/branch` — all café locations
- `/contact` — reservation form

## Structure

- `src/app/pages/` contains one routed component per page.
- `src/app/shared/` contains the shared header, footer, ticker, reviews, FAQ, and reservation HTTP service.
- `src/app/directives/` contains the scroll reveal directive.
- `public/assets/` contains the image assets copied from the original static site.
- `server/server.js` validates reservation submissions and sends the email through SMTP.
