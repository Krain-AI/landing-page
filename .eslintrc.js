/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  env: {
    node: true,
    browser: true,
    es2022: true,
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "react/no-unescaped-entities": "warn",
    "@next/next/no-img-element": "warn",
  },
  ignorePatterns: [
    ".*.js",
    "node_modules/",
    ".next",
    "dist",
    "build",
  ],
};
