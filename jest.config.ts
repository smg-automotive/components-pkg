export default {
  clearMocks: true,
  collectCoverage: false,
  errorOnDeprecated: true,
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleNameMapper: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
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
