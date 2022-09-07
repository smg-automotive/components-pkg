export default {
  clearMocks: true,
  collectCoverage: false,
  errorOnDeprecated: true,
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|svg)$': '<rootDir>/.jest/mocks/fileMock.ts',
  },
  preset: 'ts-jest/presets/js-with-ts',
  restoreMocks: true,
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: [
    '<rootDir>/.jest/setup/jestDomExpects.ts',
    '<rootDir>/.jest/setup/mockMatchMedia.ts',
  ],
  testEnvironment: 'jsdom',
};
