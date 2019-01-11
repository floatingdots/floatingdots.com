<template>
  <div class="container">
    <span class="oops"> OOPS! </span>
    <p class="text">We can't seem to find the page you're looking for.</p>
    <span class="errorCode"> ERROR CODE: {{ error.statusCode }} </span>
    <NuxtLink :to="localePath('index')" class="back"> Go to top page </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="sass" scoped>
.oops
  +font-mobile-huge
  margin: 0 0 4rem 0
  display: block
.text
  +font-mobile-medium
.errorCode
  display: block
  font-weight: 700
  margin: 0 0 8rem 0
.back
  color: $blue
  +font-mobile-medium
  font-weight: 700
</style>
