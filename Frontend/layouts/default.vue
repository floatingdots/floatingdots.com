<template>
  <div id="app">
    <Header role="banner" />
    <NavMobile role="navigation" />
    <main :class="{ inactive: $store.state.isMobileNav }" role="main">
      <div class="inner"><Nuxt /></div>
    </main>
    <Footer :class="{ inactive: $store.state.isMobileNav }" role="contentinfo" />
  </div>
</template>

<script>
import Nuxt from '@/.nuxt/components/nuxt'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NavMobile from '@/components/NavMobile'

export default {
  components: {
    Nuxt,
    Header,
    Footer,
    NavMobile,
  },
  methods: {},
}
</script>

<style lang="sass" scoped>
#app
  background: #fafafa
</style>

<style lang="sass">
.page-enter-active, .page-leave-active
  transition: opacity .2s ease-in-out
.page-enter, .page-leave-to
  opacity: 0

*
  box-sizing: border-box
p
  margin: 0 0 2.4rem 0;
  +font-mobile-base
a
  transition: all 0.15s ease
  color: $black
  word-break: break-word
  &:hover
    text-decoration: none
    opacity: 0.7

hr
  height: 0.8rem
  border: none
  background-color: $black
  border-radius: 2px
  padding: 0
  margin: 4.8rem 0

img,
picture
  display: block
  max-width: 100%
  border-radius: 5px
  img,
  source
    border-radius: 5px
  &.round
  &.oval
    border-radius: 10000px
    img,
    source
      border-radius: 10000px

ul
  list-style: none
  margin: 0
  padding: 0
.fullwidth
  width: 100vw
  position: relative
  left: 50%
  right: 50%
  margin-left: -50vw
  margin-right: -50vw

.fullwidth-inner
  margin: 0 auto
  padding: 0 $spacing-mobile

html
  +font-en
  font-size: 62.5%
  color: $text
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  text-rendering: optimizeLegibility
  overflow-x: hidden
  &:lang(ja)
    +font-ja

body
  +font-desktop-base

main
  position: relative
  filter: blur(0px)
  opacity: 1
  transition: opacity 200ms ease-out, filter 500ms ease
  padding-top: 4.0rem
  .inner
    margin: 0 auto
    padding: 64px $spacing-mobile 0 $spacing-mobile
  &.inactive
    filter: blur(20px)
    opacity: 0.1

@media only screen and (min-width: 48em)
  br.mobile
    display: none
  main
    padding-top: 8.0rem
    .inner
      padding: 64px $spacing-desktop 0 $spacing-desktop
      max-width: 1024px
  .fullwidth-inner
    max-width: 1024px
    padding: 0 $spacing-desktop
  hr
    margin: 12.8rem 0
</style>
