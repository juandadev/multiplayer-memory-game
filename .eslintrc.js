module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": ["off"],
    "react/no-array-index-key": ["off"],
    "import/no-unresolved": ["off"],
    "react/forbid-prop-types": ["off"],
  },
};
