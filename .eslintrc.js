module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    '@smg-automotive/eslint-config/react',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
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
          './**/*.mdx',
          './**/*.Test.@(ts|tsx)',
          'rollup.config.mjs',
          'postcss.config.js',
          './.jest/**/*',
          './.storybook/**/*',
          './**/StorybookShared.tsx',
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.mdx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'plugin:mdx/recommended',
      ],
      settings: {
        'mdx/code-blocks': true,
        'import/resolver': {
          typescript: {},
        },
        'import/ignore': ['@storybook/addon-docs'],
      },
      rules: {
        'no-nested-ternary': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'import/namespace': ['error', { allowComputed: true }],
        'sonarjs/no-duplicate-string': 'off',
      },
    },
    {
      files: ['*.stories.@(ts|tsx)'],
      rules: {
        'unicorn/filename-case': 'off',
        'import/namespace': ['error', { allowComputed: true }],
      },
    },
    {
      files: ['*.test.@(ts)', '*.Test.@(tsx)'],
      rules: {
        'sonarjs/no-nested-functions': 'off',
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: '@testing-library/react',
                message:
                  'Do not import helpers from @testing-library/react directly. Use .jest/utils instead.',
              },
            ],
          },
        ],
      },
    },
  ],
};
