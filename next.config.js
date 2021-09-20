const withImages = require("next-images");

// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = withImages({
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    if (!options.isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          fs: false,
        },
      };
    }

    return config;
  },
});

module.exports = nextConfig;
