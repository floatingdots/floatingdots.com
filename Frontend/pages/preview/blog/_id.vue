<template>
  <div>
    <article>
      <LinkButton url="/" />
      <header class="header">
        <SanityImage
          v-if="post.thumbnail"
          :image="post.thumbnail"
          :w="400"
          :sizes="{
            l: { media: 0, width: 1024 },
            m: { media: 0, width: 800 },
            s: { media: 0, width: 400 },
          }"
          :alt="post.thumbnail.alt"
          class="thumbnail"
          role="presentation"
          fit="clip"
        />
        <h1 class="title">{{ post.title[$i18n.locale] }}</h1>
      </header>
      <hr />

      <div class="content">
        <ul class="list">
          <li class="cat">
            <span class="label"> Categories: </span>
            <span class="text"> {{ post.Categories }} </span>
          </li>
        </ul>
        <hr />
        <Body :content="post.body" />
      </div>
    </article>
    <hr />

    <Contact />
  </div>
</template>

<script>
import { sanityPreview } from '@/plugins/sanity'
import LinkButton from '@/components/LinkButton'
import Body from '@/components/Body'
import SanityImage from '@/components/SanityImage'
import Contact from '@/components/Contact'

const queryPost = `
  *[_type == 'blog' && _id == $id]{
    ...
  }[0]`

export default {
  async asyncData(context) {
    const post = await sanityPreview.fetch(queryPost, context.route.params)
    return { post }
  },
  components: {
    LinkButton,
    Body,
    SanityImage,
    Contact,
  },
}
</script>

<style lang="sass" scoped>
.header
  margin: 4rem 0 0 0
.mainImage
  margin: 0 0 4rem 0
.title
  +font-mobile-xxlarge
  margin-top: 0
.subtitle
  +font-mobile-slarge
  margin: 0 0 6.4rem 0

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
  .content
    max-width: 768px
</style>
