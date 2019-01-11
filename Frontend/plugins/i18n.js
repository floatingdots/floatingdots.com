const en = require('../locale/en-US.js')
const ja = require('../locale/ja-JP.js')

module.exports = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: '🇺🇸 English',
      file: 'en-US.js',
    },
    {
      code: 'ja',
      iso: 'ja-JP',
      name: '🇯🇵 Japanese(日本語)',
      file: 'ja-JP.js',
    },
  ],
  defaultLocale: 'en',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
  },
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, ja },
  },
  lazy: true,
  langDir: 'locale/',
}
