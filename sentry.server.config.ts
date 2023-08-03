import * as Sentry from '@sentry/nextjs';

if (process.env.NODE_ENV !== 'development') {
  Sentry.init({
    tracesSampleRate: 0.7,
    environment: process.env.NODE_ENV,
  });
}
