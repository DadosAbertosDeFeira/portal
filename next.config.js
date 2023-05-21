const withImages = require('next-images');
const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  basePath: '',
  distDir: 'out',
  output: 'export',
  images: {
    unoptimized: true,
  },
  // TODO: deve ser removido antes de ser mergeado na main
  eslint: {
    ignoreDuringBuilds: true,
  },
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
