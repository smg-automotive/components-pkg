import globals from 'globals';
import storybookConfig from 'eslint-plugin-storybook';
// eslint-disable-next-line import/no-unresolved
import reactConfig from '@smg-automotive/eslint-config/react';

export default [
  ...reactConfig,
  {
    ignores: ['!/.storybook', '!/jest-utils', '!.prettierrc.mjs', '/coverage'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.es2021,
      },
    },
    rules: {
      ...storybookConfig.configs.recommended.rules,
      'sonarjs/no-array-index-key': 'off',
      'testing-library/no-await-sync-events': [
        'error',
        { eventModules: ['fire-event'] },
      ],
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            './**/stories/**/*',
            './**/*.stories.tsx',
            './**/*.Test.@(ts|tsx)',
            'rollup.config.mjs',
            'postcss.config.js',
            './jest-utils/**/*',
            './.storybook/**/*',
            './**/StorybookShared.tsx',
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.stories.@(ts|tsx)'],
    rules: {
      'unicorn/filename-case': 'off',
      'import/namespace': ['error', { allowComputed: true }],
    },
  },
  {
    files: ['*.test.@(ts|tsx)', '*.Test.@(tsx)'],
    rules: {
      'sonarjs/no-nested-functions': 'off',
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '@testing-library/react',
              message:
                'Do not import helpers from @testing-library/react directly. Use jest-utils/utils instead.',
            },
            {
              name: 'src/components/themeProvider',
              importNames: ['default'],
              message:
                'ThemeProvider is already provided by shared provider defined in jest-utils/utils.',
            },
          ],
        },
      ],
    },
  },
];
