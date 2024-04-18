module.exports = {
  env: {
    browser: true,
    node: true,
    es2023: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/extensions': ['error', 'ignorePackages'],
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off',
  },
};
