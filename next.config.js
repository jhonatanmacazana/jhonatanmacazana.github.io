const withImages = require("next-images");

module.exports = withImages({
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
