# Coffee Shop Angular app

Angular recreation of the original Coffee Shop HTML/CSS/JS website. The app uses standalone components and Angular Router, with Tailwind CSS v4 available alongside the original responsive visual stylesheet.

## Run locally

```bash
npm install
```

Set your Web3Forms access key in `src/environments/environment.ts`, then run `npm start` for Angular. The inquiry form submits directly to Web3Forms over HTTPS and delivers messages to the inbox configured in your Web3Forms account.

For production, replace the placeholder in `src/environments/environment.prod.ts` with your Web3Forms access key and deploy the Angular app. No Render backend or SMTP configuration is required for inquiry submissions.

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
