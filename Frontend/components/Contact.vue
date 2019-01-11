<template>
  <div class="contact">
    <span class="text" v-html="$t('studio.talk')" />
    <nuxt-link :to="localePath('contact')">
      <ElButton class="button" type="primary"> {{ $t('contactus') }} </ElButton>
    </nuxt-link>
  </div>
</template>

<style lang="sass" scoped>
.contact
  margin: 0 0 4rem 0
.text
  +font-mobile-xxlarge
  display: block
  margin: 0 0 4rem 0
.button
  +font-mobile-medium
  font-winght: 500
@media only screen and (min-width: 48em)
  .contact
    margin: 0 0 8rem 0
  .text
    +font-desktop-huge
</style>
