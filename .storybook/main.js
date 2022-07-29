const path = require("path");
function getPackageDir(package) {
  return path.dirname(require.resolve(path.join(package, 'package.json')));
}
module.exports = {
  stories: ['../src/**/*.stories.*'],
  addons: [
    '@storybook/addon-postcss',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@react-theming/storybook-addon',
  ],
  framework: '@storybook/react',
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  core: {
    builder: 'webpack5',
  },
  features: {
    previewMdx2: true,
    interactionsDebugger: true,
  },
  staticDirs: [
    { from: '../src/assets', to: '/assets' },
    { from: '../public', to: '/' },
  ],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': getPackageDir('@emotion/react'),
          'emotion-theming': getPackageDir('@emotion/react'),
          '@emotion/styled': getPackageDir('@emotion/styled'),
        },
      },
    };
  },
};
