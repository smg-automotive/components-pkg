const {
  transpileESMModulesForJest,
} = require('@smg-automotive/auth/test/environment-setup');

module.exports = transpileESMModulesForJest(() => ({
  clearMocks: true,
  collectCoverage: false,
  errorOnDeprecated: true,
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|svg)$': '<rootDir>/jest-utils/mocks/fileMock.ts',
  },
  preset: 'ts-jest/presets/js-with-ts',
  restoreMocks: false,
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: [
    '<rootDir>/jest-utils/setup/jestDomExpects.ts',
    '<rootDir>/jest-utils/setup/mockMatchMedia.ts',
    '<rootDir>/jest-utils/setup/resizeObserver.ts',
    '<rootDir>/jest-utils/setup/intersectionObserver.ts',
    '@smg-automotive/auth/test/environment-setup',
  ],
  testEnvironment: 'jest-fixed-jsdom',
}));
