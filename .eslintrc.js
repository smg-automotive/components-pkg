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
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          './**/stories/**/*',
          './**/*.stories.@(tsx|mdx)',
          './**/*.Test.@(ts|tsx)',
          'rollup.config.mjs',
          'postcss.config.js',
          './.jest/**/*',
          './.storybook/**/*',
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
      },
    },
    {
      files: [
        '**/locales/**',
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[tj]s?(x)*',
        'package-lock.json',
        '**/config/**',
        '**/cypress/**',
        '*.mdx',
      ],
      rules: {
        'sonarjs/no-duplicate-string': 'off',
      },
    },
    {
      files: ['*.ts?(x)'],
      rules: {
        'sonarjs/cognitive-complexity': 'warn',
      },
    },
  ],
};
