module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: [
    '<rootDir>/setupTests.js',
    '<rootDir>/setupEnvTestVars.js',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  coverageThreshold: {
    './src/': {
      lines: 90,
      branches: 90,
      functions: 90,
      statements: 90,
    },
  },
};
