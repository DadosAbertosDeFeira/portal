// eslint-disable-next-line import/extensions
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["<rootDir>/src/**/*.{ts,tsx}"],
  collectCoverage: true,
  coverageDirectory: "./coverage/",
  coveragePathIgnorePatterns: ["node_modules", "coverage"],
  coverageReporters: ["text", "html", "json"],
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!<rootDir>/node_modules/"],
  coverageThreshold: {
    global: {
      lines: 80,
      branches: 80,
      functions: 80,
      statements: 80,
    },
    "src/**/*.{js,jsx,ts,tsx}": {
      lines: 80,
      branches: 80,
      functions: 80,
      statements: 80,
    },
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);

// import type { JestConfigWithTsJest } from "ts-jest";
// import { pathsToModuleNameMapper } from "ts-jest";

// import { compilerOptions } from "./tsconfig.json";
