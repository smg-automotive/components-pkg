module.exports = {
  clearMocks: true,
  collectCoverage: false,
  errorOnDeprecated: true,
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|svg)$': '<rootDir>/jest-utils/mocks/fileMock.ts',
    '^jose': require.resolve('jose'),
    '^@panva/hkdf': require.resolve('@panva/hkdf'),
  },
  preset: 'ts-jest/presets/js-with-ts',
  restoreMocks: false,
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: [
    '<rootDir>/jest-utils/setup/jestDomExpects.ts',
    '<rootDir>/jest-utils/setup/mockMatchMedia.ts',
    '<rootDir>/jest-utils/setup/resizeObserver.ts',
    '<rootDir>/jest-utils/setup/intersectionObserver.ts',
    '<rootDir>/jest-utils/setup/textEncoder.ts',
    '<rootDir>/jest-utils/setup/fetch.ts',
  ],
  testEnvironment: 'jsdom',
};
