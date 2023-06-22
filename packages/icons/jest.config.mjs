/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
const settings = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  verbose: true,
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: {
    '@ktdra-digital/utils': '<rootDir>/../utils/src/index.ts',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
};

export default settings;
