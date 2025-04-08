module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Enable aggressive code splitting
      webpackConfig.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 20000,
        maxSize: 220000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // Get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              
              // Create smaller vendor chunks by npm package
              return `vendor-${packageName.replace('@', '')}`;
            },
            priority: 10,
          },
          // Critical UI components (separate from regular components)
          uiLibs: {
            test: /[\\/]src[\\/]components[\\/]ui[\\/]/,
            name: 'ui-libs',
            priority: 20,
          },
          // All other components
          components: {
            test: /[\\/]src[\\/]components[\\/]/,
            name: 'components',
            priority: 5,
          },
          // Non-critical sections can be loaded later
          sections: {
            test: /[\\/]src[\\/]pages[\\/]/,
            name(module) {
              // Group page components by directory
              const pagePath = module.context.match(/[\\/]src[\\/]pages[\\/](.*?)([\\/]|$)/)[1];
              return `section-${pagePath}`;
            },
            priority: 15,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      };

      // Add our critical entry point to control loading sequence
      webpackConfig.entry = {
        main: webpackConfig.entry,
        critical: './src/critical.js',
      };

      return webpackConfig;
    },
  },
  // Speed up build by using persistent caching
  babel: {
    loaderOptions: {
      cacheDirectory: true,
      cacheCompression: false,
    },
  },
}; 