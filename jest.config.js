const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  rootDir: './',
  setupFilesAfterEnv: [
    '<rootDir>/setupTests.js',
    '<rootDir>/setupEnvTestVars.js',
  ],
  coverageThreshold: {
    './src/': {
      lines: 90,
      branches: 90,
      functions: 90,
      statements: 90,
    },
  },
};

module.exports = createJestConfig(customJestConfig);
