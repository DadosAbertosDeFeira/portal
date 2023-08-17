const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  basePath: "",
  sentry: {
    hideSourceMaps: true,
  },
  images: { unoptimized: true },
  distDir: "out",
  output: "export",
};

module.exports = () => {
  const plugins = [withSentryConfig];

  return plugins.reduce(
    (acc, next) => {
      if (next.name === "withSentryConfig") {
        return next(acc, { silent: true });
      }
      return next(acc);
    },
    { ...nextConfig }
  );
};
