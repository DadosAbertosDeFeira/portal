const withImages = require('next-images');
const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  basePath: '',
  distDir: 'out',
};

module.exports = () => {
  const plugins = [withImages, withSentryConfig];

  return plugins.reduce(
    (acc, next) => {
      if (next.name === 'withSentryConfig') {
        return next(acc, { silent: true });
      }
      return next(acc);
    },
    { ...nextConfig }
  );
};
