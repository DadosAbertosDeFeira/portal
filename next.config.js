const { withSentryConfig } = require("@sentry/nextjs");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

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
  const plugins = [withSentryConfig, withBundleAnalyzer];

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
