<template>
  <nav :class="{ active: $store.state.isMobileNav }" class="mobile">
    <div class="inner">
      <ul class="links">
        <li
          v-for="item in $t('nav')"
          :key="item.herf"
          class="item"
          @click="$store.commit('closeMobileNav')"
        >
          <nuxt-link :to="localePath(item.href)"> {{ item.title }} </nuxt-link>
        </li>
      </ul>
      <LangSwitcher />
    </div>
  </nav>
</template>

<script>
import LangSwitcher from '@/components/LangSwitcher/Nav'

export default {
  components: {
    LangSwitcher,
  },
  mounted() {
    const html = document.documentElement
    this.$store.watch(
      state => state.isMobileNav,
      isMobileNav => {
        if (isMobileNav) {
          html.style.height = '100vh'
          html.style.overflowY = 'hidden'
        } else {
          html.style.height = 'auto'
          html.style.overflowY = 'auto'
        }
      }
    )
  },
}
</script>

<style lang="sass" scoped>
nav.mobile
  z-index: 90
  opacity: 0
  background: rgba(255,255,255,0.98)
  position: fixed
  top: 64px
  left: 0
  width: 100%
  height: calc(100vh - 64px)
  overflow: hidden
  overflow-y: auto
  -webkit-overflow-scrolling: touch
  padding: 0 32px
  padding-bottom: 4rem
  pointer-events: none
  transition: all 200ms ease-out 0ms
  &.active
    opacity: 1
    pointer-events: auto
    transition: all 200ms ease-out 40ms
  ul
    list-style: none
    margin: 2.4rem 0 8rem 0
    padding: 0
    text-align: right
  li:not(:last-child)
    margin: 0 0 4.0rem 0
  a
    +font-mobile-xxlarge
    color: $black
    text-decoration: none
    display: block

  ul.lang-switcher
    margin-top: 8rem
div.divider
  width: 100%
  padding: 0.8rem 0

@media only screen and (min-width: 48em)
  nav.mobile
    .inner
      max-width: 1024px
      margin: 0 auto
      padding: 0 32px
      display: block
    ul
      margin-bottom: 12rem
    a
      +font-desktop-xxlarge
</style>
