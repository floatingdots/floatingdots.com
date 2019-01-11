<template>
  <header class="header">
    <div class="header-container">
      <nuxt-link :to="localePath('index')" class="logo" title="Floating Dots">
        <Logo class="headerLogo" />
      </nuxt-link>
      <a class="mobile-nav-toggle " @click="$store.commit('toggleMobileNav')">
        <div :class="{ close: $store.state.isMobileNav }" class="nav-icon" />
      </a>
    </div>
  </header>
</template>

<script>
import Logo from '@/assets/logo/logo_header.min.svg'

export default {
  components: {
    Logo,
  },
  computed: {
    windowWidth() {
      return this.$store.getters.windowWidth
    },
  },
  mounted() {
    window.addEventListener('resize', this.resizeEvent)
    this.resizeEvent()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeEvent)
  },
  methods: {
    resizeEvent() {
      this.handleResize()
    },
    handleResize() {
      this.$store.commit('changeWindow', window.innerWidth)
    },
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
.header
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 64px
  z-index: 100
  display: flex
  flex-direction: column
  justify-content: center
  background-color: $white
.header-container
  width: 100%
  max-width: $mainWidth
  margin: 0 auto
  padding: 0 $spacing-mobile
  height: auto
  display: flex
  justify-content: space-between
  transition: all 0.2s
svg
  width: auto
  margin: 2px 0 0 0

.logo
  position: relative
  display: flex
  align-items: center

.nav-icon
  width: 48px
  height: 48px
  position: relative
  cursor: pointer
  &:before
    transform: rotate(0deg)
    top: 18px
    left: 12px
    content: ''
    width: 24px
    height: 1px
    position: absolute
    background: $black
    transition: all 0.25s cubic-bezier(0.55, 0.055, 0.675, 0.19)
  &.close:before
    transform: rotate(135deg)
    top: 24px
  &:after
    transform: rotate(0deg)
    bottom: 18px
    left: 12px
    content: ''
    width: 24px
    height: 1px
    position: absolute
    background: $black
    transition: all 0.25s cubic-bezier(0.55, 0.055, 0.675, 0.19)
  &.close:after
    transform: rotate(45deg)
    bottom: 23px

@media only screen and (min-width: 48em)
  .header-container
    padding: 0 $spacing-desktop
</style>
