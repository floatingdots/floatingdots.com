<template>
  <picture v-if="devices === '3x'" :role="role">
    <source
      v-for="(val, key) in sizes"
      :key="key"
      :media="`(min-width: ${val.media}em)`"
      :srcset="
        `https://res.cloudinary.com/floatingdots/image/fetch/f_auto/${escapedUrl(
          srcset(val.width, val.height)
        )} 1x,
        https://res.cloudinary.com/floatingdots/image/fetch/f_auto/${escapedUrl(
          srcset(val.width, val.height, 2)
        )} 2x,
        https://res.cloudinary.com/floatingdots/image/fetch/f_auto/${escapedUrl(
          srcset(val.width, val.height, 3)
        )} 3x
      `
      "
    />
    <img :alt="alt" :src="src" />
  </picture>
  <picture v-else :role="role">
    <source
      v-for="(val, key) in sizes"
      :key="key"
      :media="`(min-width: ${val.media}em)`"
      :srcset="
        `
        https://res.cloudinary.com/floatingdots/image/fetch/f_auto/${escapedUrl(
          srcset(val.width, val.height)
        )} 1x,
        https://res.cloudinary.com/floatingdots/image/fetch/f_auto/${escapedUrl(
          srcset(val.width, val.height, 2)
        )} 2x
      `
      "
    />
    <img
      :alt="alt"
      :src="`https://res.cloudinary.com/floatingdots/image/fetch/f_auto/${escapedUrl(src)}`"
    />
  </picture>
</template>

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
          l: { media: 64, width: 1200 },
          m: { media: 48, width: 800 },
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
  },
  methods: {
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
