<template>
  <div>
    <label>Language</label>
    <ul class="lang-switcher">
      <li
        v-for="locale in $i18n.locales"
        :key="locale.code"
        :class="{ current: locale.code === $i18n.locale }"
        @click="closeNav"
      >
        <nuxt-link :to="switchLocalePath(locale.code)"> {{ locale.name }} </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LangSwitcher',
  methods: {
    closeNav() {
      return this.$store.commit('closeMobileNav')
    },
  },
}
</script>

<style lang="sass" scoped>
div
  text-align: right
  margin-top: 4rem
ul
  margin-top: 0
a,
label
  color: $black
  text-decoration: none
label
  +font-mobile-large
  font-weight: 700
  display: block
  margin-bottom: 3.2rem
li
  margin-bottom: 1.6rem
  a
    +font-mobile-medium
    font-weight: 400
  &.current
    a
      pointer-events: none
      font-weight: 700

@media only screen and (min-width: 48em)
  label
    +font-desktop-large
</style>
