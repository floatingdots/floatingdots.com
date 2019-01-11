<template>
  <article>
    <header>
      <h1>{{ post.title[$i18n.locale] }}</h1>
    </header>
    <div>{{ bodyHtml }}</div>
  </article>
</template>

<script>
import { sanity } from '@/plugins/sanity'
import blocksToHtml from '@sanity/block-content-to-html'
// import LinkButton from '@/components/LinkButton'

const queryPost = `
  *[_type == 'careers' && slug.current == $slug && !(_id in path("drafts.**"))]{
    ...,
  }[0]
`

export default {
  async asyncData(context) {
    const post = await sanity.fetch(queryPost, context.route.params)
    return { post }
  },
  components: {},
  data() {
    return {
      body: false,
    }
  },
  computed: {
    bodyHtml() {
      if (!this.post || !this.post.body) {
        return '…'
      }
      return blocksToHtml({
        blocks: this.post.body[this.$i18n.locale],
        dataset: sanity.clientConfig.dataset,
        projectId: sanity.clientConfig.projectId,
        imageOptions: { w: this.width, h: this.height, fit: 'max' },
      })
    },
  },
  methods: {},
}
</script>

<style lang="sass">
article
  ul
    list-style: outside
    margin: 0 0 4.8rem 2.4rem
</style>

<style lang="sass" scoped></style>
