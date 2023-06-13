const path = require('path');
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
// module.exports = withSass();
const withSourceMaps = require('@zeit/next-source-maps')();
const nextConfig = withSourceMaps({
  trailingSlash: true,
  webpack(config, _options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
});
module.exports = withPlugins([
  [
    // withSass,
    {
      cssModules: true,
      cssLoaderOptions: {
        localIdentName: '[local]___[hash:base64:5]'
      },
      sassOptions: {
        includePaths: [path.join(__dirname, './pages/styles')]
      }
    }
  ],
  withImages,
  nextConfig
]);

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  }
};