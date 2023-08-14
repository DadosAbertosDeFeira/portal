const { withSentryConfig } = require("@sentry/nextjs");
const withExportImages = require("next-export-optimize-images");

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  basePath: "",
  sentry: {
    hideSourceMaps: true,
  },
  distDir: "out",
  output: "export",
};

module.exports = () => {
  const plugins = [withSentryConfig, withExportImages];

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
