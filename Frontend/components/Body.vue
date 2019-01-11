<template>
  <div class="content"><div v-html="bodyHtml" /></div>
</template>

<script>
import { sanity } from '@/plugins/sanity'
import blocksToHtml from '@sanity/block-content-to-html'
import imageUrlBuilder from '@sanity/image-url'

const { h } = blocksToHtml
const builder = imageUrlBuilder(sanity)
const cloudinary = 'https://res.cloudinary.com/floatingdots/image/fetch/f_auto,dpr_auto/'

export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      body: false,
    }
  },
  computed: {
    bodyHtml() {
      return blocksToHtml({
        blocks: this.content[this.$i18n.locale],
        serializers: { types: { image: this.ImageRender } },
        dataset: sanity.clientConfig.dataset,
        projectId: sanity.clientConfig.projectId,
      })
    },
  },
  methods: {
    ImageRender(props) {
      return h('picture', {}, [
        h('source', {
          media: '(min-width: 60em)',
          srcset: `${cloudinary}${this.escapedUrl(this.src(props, 960))} 1x,
                   ${cloudinary}${this.escapedUrl(this.src(props, 1920))} 2x,`,
        }),
        h('source', {
          media: '(min-width: 48em)',
          srcset: `${cloudinary}${this.escapedUrl(this.src(props, 768))} 1x,
                   ${cloudinary}${this.escapedUrl(this.src(props, 1536))} 2x,`,
        }),
        h('source', {
          media: '(min-width: 0em)',
          srcset: `${cloudinary}${this.escapedUrl(this.src(props, 400))} 1x,
                   ${cloudinary}${this.escapedUrl(this.src(props, 800))} 2x,`,
        }),
        h('img', {
          src: `${cloudinary}${this.escapedUrl(this.src(props, 400))}`,
        }),
      ])
    },
    src(props, w) {
      return builder
        .image(props.node)
        .width(w)
        .quality(100)
        .fit('max')
        .url()
    },
    escapedUrl(url) {
      return url.toString().replace('?', '%3F')
    },
  },
}
</script>

<style lang="sass" scoped>
.content
  max-width: 960px
  margin: 0 auto
  p,a,span,ul,li
    +font-mobile-base
  p
    margin: 0 0 4rem 0
</style>
