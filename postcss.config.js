const flexbugFixes = require('postcss-flexbugs-fixes');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    flexbugFixes,
    autoprefixer({
      flexbox: 'no-2009',
    }),
  ],
};
