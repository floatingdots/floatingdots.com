<template>
  <div>
    <article>
      <LinkButton url="index" />
      <header class="header">
        <SanityImage
          v-if="post.mainImage"
          :image="post.mainImage"
          :w="400"
          :original-width="post.dimensions.width"
          :original-height="post.dimensions.height"
          :sizes="{
            l: { media: 1024, width: 1024 },
            m: { media: 768, width: 768 },
            s: { media: 0, width: 400 },
          }"
          :alt="post.mainImage.alt"
          class="mainImage"
          role="presentation"
          fit="clip"
        />
        <h1 class="title">{{ post.title[$i18n.locale] }}</h1>
        <h2 class="subtitle">{{ post.subtitle[$i18n.locale] }}</h2>
        <hr />

        <ul class="list">
          <li class="item">
            <span class="label"> Platforms: </span> <span class="text"> {{ post.platforms }} </span>
          </li>
          <li class="item">
            <span class="label"> Deliverables: </span>
            <span class="text"> {{ post.deliverables }} </span>
          </li>
          <li class="item">
            <span class="label"> Techs: </span> <span class="text"> {{ post.techs }} </span>
          </li>
          <li class="item">
            <span class="label"> URL: </span>
            <span class="text">
              <a herf="post.url" target="_blank" rel="nofollow,noopener"> {{ post.url }} </a>
            </span>
          </li>
        </ul>
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
  *[_type == 'projects' && slug.current == $slug && !(_id in path("drafts.**"))]{
    ...,
    'dimensions': mainImage.asset->metadata.dimensions,
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
</style>
