const prettierConfig = require('./.prettierrc.js')

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:react-hooks/recommended',
    'plugin:testing-library/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', 'react-hooks', 'jest', 'testing-library'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/'],
  rules: {
    'prettier/prettier': [2, prettierConfig],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          './**/*.stories.mdx',
          './**/*.test.@(ts|tsx)',
          'rollup.config.js',
        ],
      },
    ],
    'import/extensions': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function' },
    ],
    'arrow-body-style': ['error', 'always'],
    'react/require-default-props': [
      'error',
      { forbidDefaultForRequired: true, ignoreFunctionalComponents: true },
    ],
    'no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
  },
  overrides: [
    {
      files: ['*.json'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
  ],
}
