module.exports = {
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      arrowFunctions: true
    }
  },
  extends: ["plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error", { singleQuote: true }],
    "no-process-env": "error",
    "no-console": "error",
    "func-style": ["off", "declaration", { allowArrowFunctions: true }]
  }
};
