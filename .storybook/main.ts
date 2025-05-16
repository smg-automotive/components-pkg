import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
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

    webpack.resolve.fallback = {
      ...(webpack.resolve.fallback || {}),
      http: require.resolve('stream-http'),
      querystring: require.resolve('querystring-es3'),
      https: require.resolve('https-browserify'),
      buffer: require.resolve('buffer/'),
    };

    return webpack;
  },
  staticDirs: [
    {
      from: '../src/assets',
      to: 'assets',
    },
  ],
};
export default config;
