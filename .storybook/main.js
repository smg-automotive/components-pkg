const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.*'],
  addons: [
    '@storybook/addon-postcss',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-themes',
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
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    return config;
  },
};
