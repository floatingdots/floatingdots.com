<template>
  <div>
    <LinkButton class="back" text="backToCareers" url="careers" />
    <article>
      <header>
        <h1 class="title">{{ post.title[$i18n.locale] }}</h1>
      </header>
      <Body :content="post.body" />
    </article>
  </div>
</template>

<script>
import { sanity } from '@/plugins/sanity'
import blocksToHtml from '@sanity/block-content-to-html'
import LinkButton from '@/components/LinkButton'
import Body from '@/components/Body'

const queryPost = `
  *[_type == 'careers' && slug.current == $slug && !(_id in path("drafts.**"))]{
    ...,
  }[0]
`

export default {
  components: {
    Body,
    LinkButton,
  },
  async asyncData(context) {
    const post = await sanity.fetch(queryPost, context.route.params)
    return { post }
  },
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

<style lang="sass" scoped>
.back
  margin-bottom: 4rem
.title
  +font-mobile-xxlarge
  margin-top: 0
  text-transform: uppercase
  text-align: center
  margin: 4rem auto

.list
  list-style: none
  margin: 0
  +font-mobile-base
  font-weight: 500
  .item
    display: flex
    flex-direction: column
    margin: 0 0 2.4rem 0
  .label
    font-weight: 700

@media only screen and (min-width: 48em)
  .back
    margin-bottom: 8rem
  .title
    +font-desktop-huge
    max-width: 760px
    margin: 8rem auto
</style>
