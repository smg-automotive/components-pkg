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
      },
    },
  ],
};
