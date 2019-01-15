<template>
  <nuxt-link class="link" :to="localePath(url)">
    <ElButton class="button" type="plain" icon="el-icon-back"> {{ $t(text) }} </ElButton>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: undefined,
    },
    text: {
      type: String,
      default: 'back',
    },
  },
}
</script>

<style lang="sass" scoped>
.link
  display: block
.button
  background: transparent
</style>
