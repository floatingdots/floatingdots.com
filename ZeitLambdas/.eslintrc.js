module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'prettier',
  ],
  rules: {
    'no-console': 1,
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
        'semi': false,
        'trailingComma' : 'es5',
        'bracketSpacing': true,
        'tabWidth': 2,
        'useTabs': false,
      }
    ],
  }
}
