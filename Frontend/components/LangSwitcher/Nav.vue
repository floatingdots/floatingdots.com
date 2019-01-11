<template>
  <div>
    <label>Language - 言語</label>
    <ul class="lang-switcher">
      <li
        v-for="locale in $i18n.locales"
        :key="locale.code"
        :class="{ current: locale.code === $i18n.locale }"
      >
        <nuxt-link :to="switchLocalePath(locale.code)"> {{ locale.name }} </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LangSwitcher',
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
  +font-mobile-medium
  font-weight: 700
  padding: 0 0 1.6rem 0
  display: block
li
  margin-bottom: 1.6rem
  a
    +font-mobile-medium
    font-weight: 400
  &.current
    a
      pointer-events: none
      font-weight: 700
</style>
