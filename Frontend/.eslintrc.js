module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "prettier/vue"
  ],
  plugins: [
    'vue',
    'prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        'ignores': [
          'nuxt',
          'nuxt-link'
        ]
      }
    ],
  }
}
