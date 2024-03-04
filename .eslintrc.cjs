module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "eslint-plugin-import"],
  rules: {
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "index",
        ],
        pathGroups: [
          {
            pattern: "next",
            group: "external",
            position: "before",
          },
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "@",
            group: "internal",
            position: "after",
          },
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "func-style": ["error", "declaration"],
    "default-case-last": "error",
    "no-console": "error",
    "no-empty": "error",
    "react/button-has-type": ["error"],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        reservedFirst: true,
      },
    ],
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "react/jsx-pascal-case": ["error"],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};