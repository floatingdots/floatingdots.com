<template>
  <div>
    <div class="mediabox lazyload" :style="`padding-bottom: ${paddingB}%;`">
      <picture class="lazyload">
        <!--[if IE 9]><video style="display: none"><![endif]-->
        <source
          v-for="(val, key) in sizes"
          :key="key"
          :media="`(min-width: ${val.media}px)`"
          :data-srcset="
            `https://res.cloudinary.com/floatingdots/image/fetch/f_auto,q_80/${escapedUrl(
              srcset(val.width, val.height)
            )} 1x,
            https://res.cloudinary.com/floatingdots/image/fetch/f_auto,q_80/${escapedUrl(
              srcset(val.width, val.height, 2)
            )} 2x,
          `
          "
          data-sizes="auto"
        />
        <!--[if IE 9]></video><![endif]-->
        <img
          :src="
            `https://res.cloudinary.com/floatingdots/image/fetch/f_auto,q_50,w_0.1,h_0.1,e_blur:3000/${escapedUrl(
              srcset(w, h)
            )}`
          "
          :data-src="
            `https://res.cloudinary.com/floatingdots/image/fetch/f_auto,q_80/${escapedUrl(
              srcset(w, h)
            )}`
          "
          class="lazyload"
          alt="image with artdirection"
        />
      </picture>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.mediabox
  transition: padding-bottom 200ms
  position: relative
  background-color: #eee
  width: 100%
  picture,
  img
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
.mediabox.lazyloaded
  background-color: transparent
  height: auto !important
  width: auto !important
</style>

<script>
import imageUrlBuilder from '@sanity/image-url'
import { sanity } from '@/plugins/sanity'

const builder = imageUrlBuilder(sanity)

export default {
  props: {
    image: {
      type: Object,
      required: true,
    },
    sizes: {
      type: Object,
      default() {
        return {
          l: { media: 1024, width: 1200 },
          m: { media: 768, width: 800 },
          s: { media: 0, width: 400 },
        }
      },
    },
    alt: {
      type: String,
      default: 'Missing caption',
    },
    role: {
      type: String,
      default: 'img',
    },
    devices: {
      type: String,
      default: undefined,
    },
    fit: {
      type: String,
      default: 'clip',
    },
    quality: {
      type: Number,
      default: 82,
    },
    w: {
      type: Number,
      default: undefined,
    },
    h: {
      type: Number,
      default: undefined,
    },
    format: {
      type: String,
      default: undefined,
    },
    flipHorizontal: {
      type: Boolean,
      default: false,
    },
    flipVertical: {
      type: Boolean,
      default: false,
    },
    originalHeight: {
      type: Number,
      default: undefined,
    },
    originalWidth: {
      type: Number,
      default: undefined,
    },
    lqip: {
      type: String,
      default: undefined,
    },
    color: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
      paddingB: (this.originalHeight / this.originalWidth) * 100,
    }
  },
  computed: {
    src() {
      const img = builder
        .image(this.image)
        .width(this.w)
        .height(this.h)
        .quality(this.quality)
        .fit(this.fit)
        .format(this.format)
      return img
    },
    windowWidth() {
      return this.$store.getters.windowWidth
    },
  },
  mounted() {
    this.calcuratePadding(this.sizes)
    this.$store.watch(
      () => this.windowWidth,
      () => {
        this.calcuratePadding(this.sizes)
      }
    )
  },
  methods: {
    calcuratePadding(sizes) {
      for (const i in sizes) {
        if (sizes[i].height && sizes[i].width && this.windowWidth >= sizes[i].media) {
          this.paddingB = (sizes[i].height / sizes[i].width) * 100
          // console.log(this.paddingB, sizes[i].media * 10)
          return
        }
      }
      if (this.h && this.w) {
        this.paddingB = (this.h / this.w) * 100
        // console.log(this.paddingB)
      }
    },
    escapedUrl(url) {
      return url.toString().replace('?', '%3F')
    },
    srcset(w, h, dpr = 1) {
      if (w && h) {
        return builder
          .image(this.image)
          .width(w * dpr)
          .height(h * dpr)
          .quality(this.quality)
          .fit(this.fit)
          .format(this.format)
      }
      if (h) {
        return builder
          .image(this.image)
          .height(h * dpr)
          .quality(this.quality)
          .fit(this.fit)
          .format(this.format)
      }
      return builder
        .image(this.image)
        .width(w * dpr)
        .quality(this.quality)
        .fit(this.fit)
        .format(this.format)
    },
    getHeightFromWidth(w, aspectRatio) {
      return Math.round(w * aspectRatio)
    },
    getAspectRatio(w, h) {
      const aspectRatio = Math.round((h / w) * 10000) / 10000
      return aspectRatio
    },
  },
}
</script>
