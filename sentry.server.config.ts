// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
  release: process.env.NEXT_PUBLIC_SENTRY_RELEASE || "local",
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || "https://b0af2b5766d4f90db9810ccf542c914c@o4506043986280448.ingest.us.sentry.io/4510729346023424",
  environment: process.env.NODE_ENV || "local",
});
