<template>
  <div class="header-nav">
    <div class="header-wrapper">
      <nuxt-link :to="localePath('index')" class="logo"> <Logo class="headerLogo" /> </nuxt-link>
      <a class="mobile-nav-toggle " @click="$store.commit('toggleMobileNav'), scrollTop()">
        <div :class="{ close: $store.state.isMobileNav }" class="nav-icon" />
      </a>
    </div>
  </div>
</template>

<script>
import Logo from '@/assets/logo/logo_header.min.svg'

export default {
  components: {
    Logo,
  },
  methods: {
    scrollTop() {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
        })
      }, 100)
    },
  },
}
</script>

<style lang="sass" scoped>
svg
  width: auto
  height: 20px

.logo
  position: relative
  top: 16px

.mobile-nav-toggle
  margin-right: -12px

.nav-icon
  width: 48px
  height: 48px
  position: relative
  cursor: pointer

.nav-icon:before
  transform: rotate(0deg)
  top: 18px
  left: 12px
  content: ''
  width: 24px
  height: 1px
  position: absolute
  background: $white
  transition: all 0.25s cubic-bezier(0.55, 0.055, 0.675, 0.19)

.nav-icon.available:before
  transform: rotate(135deg)
  top: 24px

.nav-icon:after
  transform: rotate(0deg)
  bottom: 18px
  left: 12px
  content: ''
  width: 24px
  height: 1px
  position: absolute
  background: $white
  transition: all 0.25s cubic-bezier(0.55, 0.055, 0.675, 0.19)

.nav-icon.available:after
  transform: rotate(45deg)
  bottom: 23px

@media only screen and (min-width: 48em)
  .logo
    top: 4px
  nav.mobile
    display: none
  .mobile-nav-toggle
    display: none
  .desktop
    display: flex
    justify-content: space-between
    align-items: center
    list-style: none
    padding: 0
  ul.desktop
    display: flex
    justify-content: space-around
    flex: 0 0 50%
  ul.desktop.lang
    flex: 0 0 20%
</style>
