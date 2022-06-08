const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(woff|woff2|otf)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
};
