import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import type { StorybookConfig } from '@storybook/react-webpack5';

import { autoScout24System } from 'src/themes';

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
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        esModuleInterop: false,
        allowSyntheticDefaultImports: false,
      },
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) => {
        const isWhitelistedProp = ['variant', 'size'].includes(prop.name);

        // Excludes styling props defined by chakra
        const isExcludedProp = ['as', 'asChild', 'recipe'].includes(prop.name);
        const isStyledSystemProp = autoScout24System.isValidProperty(prop.name);

        // Excludes HTML attributes and DOM properties coming (mostly) from react
        const isHTMLProp = prop.parent?.name?.match(/^(html|dom)/i) ?? false;
        const isReactProp =
          prop.parent?.fileName?.includes('node_modules/@types/react') ?? false;

        return (
          isWhitelistedProp ||
          (!isExcludedProp &&
            !isStyledSystemProp &&
            !isHTMLProp &&
            !isReactProp)
        );
      },
    },
  },
  staticDirs: [
    {
      from: '../src/assets',
      to: 'assets',
    },
  ],
  webpackFinal: async (webpack) => {
    webpack.resolve = webpack.resolve || {};
    webpack.resolve.plugins = webpack.resolve.plugins || [];
    webpack.resolve.plugins.push(new TsconfigPathsPlugin({}));
    return webpack;
  },
};
export default config;
