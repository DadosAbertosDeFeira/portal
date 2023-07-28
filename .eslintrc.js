module.exports = {
  // Configuration for JavaScript files
  extends: [
    "airbnb-base",
    "next/core-web-vitals", // Needed to avoid warning in next.js build: 'The Next.js plugin was not detected in your ESLint configuration'
    "plugin:prettier/recommended",
  ],
  overrides: [
    // Configuration for Javascript/TypeScript files
    {
      files: ["**/*.ts", "**/*.tsx"],
      plugins: [
        "@typescript-eslint",
        "unused-imports",
        "tailwindcss",
        "simple-import-sort",
        "jsx-a11y",
      ],
      extends: [
        "plugin:tailwindcss/recommended",
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "next/core-web-vitals",
        "plugin:prettier/recommended",
        "plugin:jsx-a11y/recommended",
      ],
      parserOptions: {
        project: "./tsconfig.json",
      },
      rules: {
        "react/function-component-definition": "off", // Disable Airbnb's specific function type
        "react/destructuring-assignment": "off", // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        "react/require-default-props": "off", // Allow non-defined react props as undefined
        "react/jsx-props-no-spreading": "off", // _app.tsx uses spread operator and also, react-hook-form
        "react-hooks/exhaustive-deps": "off", // Incorrectly report needed dependency with Next.js router
        "react/jsx-one-expression-per-line": "off",
        "react/button-has-type": "off",
        "@typescript-eslint/consistent-type-imports": "error", // Ensure `import type` is used when it's necessary
        "no-restricted-syntax": [
          "error",
          "ForInStatement",
          "LabeledStatement",
          "WithStatement",
        ], // Overrides Airbnb configuration and enable no-restricted-syntax
        "import/prefer-default-export": "off", // Named export is easier to refactor automatically
        "import/no-default-export": "error",
        "simple-import-sort/imports": "error", // Import configuration for `eslint-plugin-simple-import-sort`
        "simple-import-sort/exports": "error", // Export configuration for `eslint-plugin-simple-import-sort`
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/quotes": "off",
        "@typescript-eslint/comma-dangle": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        "tailwindcss/no-custom-classname": "off",
      },
    },
    // Configuration for testing
    {
      files: ["**/*.test.ts", "**/*.test.tsx", "**/*.test.js", "**/*.test.jsx"],
      plugins: ["jest", "jest-formatting", "testing-library", "jest-dom"],
      extends: [
        "plugin:jest/recommended",
        "plugin:jest-formatting/recommended",
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended",
      ],
      env: {
        jest: true,
      },
    },
    // Configuration for Storybook
    {
      files: ["*.stories.*"],
      extends: ["plugin:storybook/recommended"],
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: true,
          },
        ],
      },
    },
  ],
};
