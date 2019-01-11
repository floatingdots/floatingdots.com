<template>
  <nuxt-link :to="localePath('index')">
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
      default: 'Back',
    },
  },
}
</script>

<style lang="sass" scoped>
.button
  background: transparent
</style>
