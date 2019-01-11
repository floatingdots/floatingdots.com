require('dotenv').config()
import { sanity } from './plugins/sanity'

const i18n = require('./plugins/i18n')

const urls = async function getUrls() {
  const paths = await sanity.fetch(`{
    "projects": *[_type == "projects" && availability].slug.current,
    "blog": *[_type == "blog" && availability].slug.current
    }`)
  return Object.keys(paths).reduce(
    (acc, key) => [
      ...acc,
      ...paths[key].reduce((accc, cur) => [...accc, `/${key}/${cur}`, `/ja/${key}/${cur}`], []),
    ],
    []
  )
}

module.exports = {
  env: {
    sanityId: process.env.SANITY_ID,
    sanityTokenPreview: process.env.SANITY_TOKEN_PREVIEW,
    googleMapsApi: process.env.GOOGLE_MAPS_API,
    googleAnaliticsId: process.env.GOOGLE_MAPS_API,
    googleRecaptchaSitekey: process.env.GOOGLE_RECAPTCHA_SITEKEY,
  },
  loading: { color: '#121314' },
  head: {
    title: 'Floating Dots is a Digital Design Studio in NYC.',
    titleTemplate: '%s - Floating Dots',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Floating Dots is a Digital Design Studio in NYC. We help companies design and develop for products, services and businesses.',
      },
      { property: 'og:title', content: 'Floating Dots' },
      {
        property: 'og:image',
        content: 'https://floatingdots.com/icon/ogp.jpg',
      },
      { property: 'og:url', content: 'https://floatingdots.com/' },
      {
        property: 'og:description',
        content:
          'Floating Dots is a Digital Design Studio in NYC. We help companies design and develop for products, services and businesses.',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Floating Dots' },
      {
        name: 'twitter:description',
        content:
          'Floating Dots is a Digital Design Studio in NYC. We help companies design and develop for products, services and businesses.',
      },
      {
        name: 'twitter:image',
        content: 'https://floatingdots.com/icon/ogp.jpg',
      },
    ],
    link: [
      { rel: 'preconnect', href: '//res.cloudinary.com' },
      { rel: 'preconnect', href: '//res-1.cloudinary.com' },
      { rel: 'preconnect', href: '//res-2.cloudinary.com' },
      { rel: 'preconnect', href: '//res-3.cloudinary.com' },
      { rel: 'preconnect', href: '//res-4.cloudinary.com' },
      { rel: 'preconnect', href: '//res-5.cloudinary.com' },
      { rel: 'icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        size: '180x180',
        href: '/icon/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '16x16',
        href: '/icon/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '32x32',
        href: '/icon/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '192x192',
        href: '/icon/android-chrome-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '512x512',
        href: '/icon/android-chrome-512x512.png',
      },
      {
        rel: 'mask-icon',
        color: '#231F20',
        href: '/icon/safari-pinned-tab.svg',
      },
      { rel: 'msapplication-TileColor', content: '#231F20' },
      { rel: 'msapplication-TileImage', content: '/icon/mstile-150x150.png' },
      { rel: 'theme-color', href: '#ffffff' },
    ],
  },
  manifest: {
    name: 'Floating Dots',
    short_name: '.•',
    title: 'Floating Dots',
    description:
      'Floating Dots is a Digital Design Studio in NYC. We help companies design and develop for products, services and businesses.',
    theme_color: '#231F20',
    background_color: '#231F20',
    display: 'standalone',
    start_url: '/',
    icons: [
      {
        src: '/icon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  },
  generate: {
    fallback: true,
    routes: urls,
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://floatingdots.com',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true,
    exclude: ['/preview/**'],
    async routes() {
      const sitemap = []
      sitemap.push({
        url: '/',
        changefreq: 'weekly',
        priority: 1,
        lastmodISO: new Date().toISOString(),
      })
      sitemap.push({
        url: '/ja',
        changefreq: 'weekly',
        priority: 1,
        lastmodISO: new Date().toISOString(),
      })
      sitemap.push({
        url: '/studio',
        changefreq: 'yearly',
        priority: 0.8,
        lastmodISO: '2018-11-20T04:54:04.279Z',
      })
      sitemap.push({
        url: '/ja/studio',
        changefreq: 'yearly',
        priority: 0.8,
        lastmodISO: '2018-11-20T04:54:04.279Z',
      })
      sitemap.push({
        url: '/blog',
        changefreq: 'monthly',
        priority: 0.5,
        lastmodISO: '2018-11-20T04:54:04.279Z',
      })
      sitemap.push({
        url: '/ja/blog',
        changefreq: 'monthly',
        priority: 0.5,
        lastmodISO: '2018-11-20T04:54:04.279Z',
      })
      sitemap.push({
        url: '/careers',
        changefreq: 'monthly',
        priority: 0.2,
        lastmodISO: '2018-11-20T04:54:04.279Z',
      })
      sitemap.push({
        url: '/ja/careers',
        changefreq: 'monthly',
        priority: 0.2,
        lastmodISO: '2018-11-20T04:54:04.279Z',
      })
      sitemap.push({
        url: '/contact',
        changefreq: 'yearly',
        priority: 0.1,
        lastmodISO: '2018-11-20T04:54:04.279Z',
      })
      sitemap.push({
        url: '/ja/contact',
        changefreq: 'yearly',
        priority: 0.1,
        lastmodISO: '2018-11-20T04:54:04.279Z',
      })
      const sitemapRoutes = await urls()
      await sitemapRoutes.map(route =>
        sitemap.push({
          url: route,
          changefreq: 'never',
          priority: 0.8,
          lastmodISO: new Date().toISOString(),
        })
      )
      return sitemap
    },
  },
  css: ['normalize.css'],
  plugins: [
    '@/plugins/sanity',
    '@/plugins/veeValidate',
    '@/plugins/elementUi',
    { src: '@/plugins/lazysizes', ssr: false },
    { src: '@/plugins/ga.js', ssr: false },
    // '@/plugins/googleMaps',
    // { src: '@plugins/hotjar.js', ssr: false },
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    ['nuxt-i18n', i18n],
    ['nuxt-sass-resources-loader', ['@/assets/styles/variables.sass']],
  ],
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.test = /\.(png|jpe?g|gif|webp)$/
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
      })
    },
  },
}
