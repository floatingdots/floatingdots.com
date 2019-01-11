<template>
  <img
    :src="src"
    :srcset="`${srcsetS} ${srcset.s}w, ${srcsetM} ${srcset.m}w, ${srcsetL} ${srcset.l}w`"
    :alt="alt"
    :sizes="sizes"
  />
</template>

<script>
import imageUrlBuilder from '@sanity/image-url'
import sanity from '@/plugins/sanity'

const builder = imageUrlBuilder(sanity)

export default {
  props: {
    sizes: {
      type: String,
      default: '100vw',
    },
    image: {
      type: Object,
      required: true,
    },
    alt: {
      type: String,
      default: 'Missing caption',
    },
    w: {
      type: Number,
      default: undefined,
    },
    h: {
      type: Number,
      default: undefined,
    },
    srcset: {
      type: Object,
      default() {
        return { s: 400, m: 800, l: 1200 }
      },
    },
    quality: {
      type: Number,
      default: 82,
    },
    fit: {
      type: String,
      default: 'clip',
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
  },

  computed: {
    src() {
      return builder
        .image(this.image)
        .width(this.w)
        .height(this.h)
        .quality(this.quality)
        .fit(this.fit)
        .format(this.format)
    },
    srcsetS() {
      if (!this.h) {
        return builder
          .image(this.image)
          .width(this.srcset.s)
          .quality(this.quality)
          .fit(this.fit)
          .format(this.format)
      }
      return builder
        .image(this.image)
        .width(this.srcset.s)
        .height(this.getHeightFromWidth(this.srcset.s, this.getAspectRatio()))
        .quality(this.quality)
        .fit(this.fit)
        .format(this.format)
    },
    srcsetM() {
      if (!this.h) {
        return builder
          .image(this.image)
          .width(this.srcset.m)
          .quality(this.quality)
          .fit(this.fit)
          .format(this.format)
      }
      return builder
        .image(this.image)
        .width(this.srcset.m)
        .height(this.getHeightFromWidth(this.srcset.m, this.getAspectRatio()))
        .quality(this.quality)
        .fit(this.fit)
        .format(this.format)
    },
    srcsetL() {
      if (!this.h) {
        return builder
          .image(this.image)
          .width(this.srcset.l)
          .quality(this.quality)
          .fit(this.fit)
          .format(this.format)
      }
      return builder
        .image(this.image)
        .width(this.srcset.l)
        .height(this.getHeightFromWidth(this.srcset.l, this.getAspectRatio()))
        .quality(this.quality)
        .fit(this.fit)
        .format(this.format)
    },
  },
  methods: {
    getHeightFromWidth(w, h) {
      return Math.floor(w * h)
    },
    getAspectRatio() {
      return this.h / this.w
    },
  },
}
</script>
