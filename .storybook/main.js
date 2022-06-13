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
  staticDirs: [{ from: '../src/assets', to: '/assets' }],
};
