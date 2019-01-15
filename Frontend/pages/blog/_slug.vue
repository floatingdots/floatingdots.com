<template>
  <div>
    <LinkButton class="back" text="backToBlogList" url="blog" />
    <article>
      <header class="header">
        <SanityImage
          v-if="post.thumbnail"
          :image="post.thumbnail"
          :w="400"
          :original-width="post.dimensions.width"
          :original-height="post.dimensions.height"
          :sizes="{
            l: { media: 1024, width: 1024 },
            m: { media: 768, width: 768 },
            s: { media: 0, width: 400 },
          }"
          :alt="post.thumbnail.alt"
          class="thumbnail"
          role="presentation"
          fit="clip"
        />
        <h1 class="title">{{ post.title[$i18n.locale] }}</h1>
        <div class="info">
          <div class="date">
            <time :datetime="post.publishedAt">Posted: {{ date }}</time>
          </div>
          <ul class="category">
            <li v-for="(category, i) in post.categories" :key="i">
              <!-- <nuxt-link :to="`${category.slug.current}`"> -->
              {{ category.title[$i18n.locale] }}
              <!-- </nuxt-link> -->
            </li>
          </ul>
        </div>
      </header>
      <hr />

      <Body :content="post.body" />
    </article>
    <hr />

    <Contact />
  </div>
</template>

<script>
import { sanity } from '@/plugins/sanity'
import LinkButton from '@/components/LinkButton'
import SanityImage from '@/components/SanityImageLQIP'
import Body from '@/components/Body'
import Contact from '@/components/Contact'

const queryPost = `
  *[_type == 'blog' && slug.current == $slug && !(_id in path("drafts.**"))]{
    ...,
    categories[]->,
    'dimensions': thumbnail.asset->metadata.dimensions,
  }[0]`

export default {
  async asyncData(context) {
    const post = await sanity.fetch(queryPost, context.route.params)
    return { post }
  },
  components: {
    LinkButton,
    SanityImage,
    Body,
    Contact,
  },
  data() {
    return {
      date: '',
    }
  },
  created() {
    this.formattedDate(this.post.publishedAt)
  },
  methods: {
    formattedDate(input) {
      this.$moment.locale(this.$i18n.locale)
      this.date = this.$moment(input).format('LL')
    },
  },
}
</script>

<style lang="sass" scoped>
.back
  margin-bottom: 4rem
.mainImage
  margin: 0 0 4rem 0
.title
  +font-mobile-xxlarge
  margin-top: 0
  text-transform: uppercase
  text-align: center
  margin: 4rem auto

.info
  +font-mobile-small
  text-transform: uppercase
  text-align: center
  color: #777
  font-weight: 700

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
  .info
    +font-desktop-small
    font-weight: 700
  .title
    +font-desktop-huge
    max-width: 760px
    margin: 8rem auto
</style>
