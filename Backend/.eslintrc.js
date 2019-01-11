module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'prettier',
  ],
  plugins: [
    'prettier',
  ],
  rules: {
    'import/extensions': ['off', 'always', {
      'js': 'never',
    }],
    "import/no-unresolved": "off",
  }
}
