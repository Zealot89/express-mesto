module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-underscore-dangle': ['error', {
      allow: ['foo_', '_bar'],
      allowAfterThis: true,
      allowAfterSuper: true,
      allowAfterThisConstructor: true,
    }],
    'eol-last': ['error', 'never'],
  },
};