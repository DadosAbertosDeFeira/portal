import * as Sentry from '@sentry/nextjs';

Sentry.init({
  tracesSampleRate: 0.7,
  environment: process.env.NODE_ENV,
});

