module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['standard'],
  overrides: [],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'warn',
    'comma-dangle': 'off',
    'eol-last': 'warn',
    'no-multiple-empty-lines': 'off',
    camelcase: 'off',
    quotes: 'warn',
  },
}
