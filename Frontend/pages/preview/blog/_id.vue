<template>
  <article v-if="post.title[$i18n.locale]">
    <header>
      <h1>{{ post.title[$i18n.locale] }}</h1>
      <ul class="categories">
        <li v-for="(category, i) in post.categories" :key="i">
          <NuxtLink :to="`tag/${category.slug.current}`">
            <Tag :name="category.title[$i18n.locale]" />
          </NuxtLink>
        </li>
      </ul>
    </header>
    <div>{{ bodyHtml }}</div>
  </article>
</template>

<script>
import { sanityPreview } from '@/plugins/sanity'
import blocksToHtml from '@sanity/block-content-to-html'

const queryPost = `
  *[_type == 'blog' && _id == $id ]{
    ...,
  }[0]
`

export default {
  async asyncData(context) {
    const post = await sanityPreview.fetch(queryPost, context.route.params)
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
        dataset: sanityPreview.clientConfig.dataset,
        projectId: sanityPreview.clientConfig.projectId,
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
