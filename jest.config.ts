export default {
  clearMocks: true,
  collectCoverage: false,
  errorOnDeprecated: true,
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|svg)$': '<rootDir>/.jest/mocks/fileMock.ts',
  },
  preset: 'ts-jest/presets/js-with-ts',
  restoreMocks: false,
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: [
    '<rootDir>/.jest/setup/jestDomExpects.ts',
    '<rootDir>/.jest/setup/mockMatchMedia.ts',
    '<rootDir>/.jest/setup/resizeObserver.ts',
    '<rootDir>/.jest/setup/intersectionObserver.ts',
  ],
  testEnvironment: 'jsdom',
};
