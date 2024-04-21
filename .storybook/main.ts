import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-webpack5-compiler-babel',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
    defaultName: 'Documentation',
  },
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  webpackFinal: async (webpack) => {
    webpack.resolve = webpack.resolve || {};
    webpack.resolve.plugins = webpack.resolve.plugins || [];
    webpack.resolve.plugins.push(new TsconfigPathsPlugin({}));
    return webpack;
  },
};
export default config;
