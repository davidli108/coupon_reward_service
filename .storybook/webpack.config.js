const path = require('path');

module.exports = {
  plugins : [],
  module  : {
    rules: [
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  resolve : {
    alias: {
      '@config'     : path.resolve('src/config'),
      '@components' : path.resolve('src/components'),
      '@graphql'    : path.resolve('src/graphql'),
      '@modules'    : path.resolve('src/modules'),
      '@services'   : path.resolve('src/services'),
      '@store'      : path.resolve('src/store'),
      '@theme'      : path.resolve('src/theme'),
    },
  },
};
