<template>
  <div class="container">
    <LinkButton class="back" text="backToHome" url="index" />
    <section class="blog">
      <span class="sectionTitle"> Blog </span>
      <ul class="posts">
        <li v-for="(post, i) in posts" :key="i" class="post">
          <NuxtLink
            :to="{
              name: `blog-slug___${$i18n.locale}`,
              params: { slug: post.slug.current },
            }"
            class="link "
          >
            <SanityImage
              v-if="post.thumbnail"
              :image="post.thumbnail"
              :w="400"
              :h="300"
              :original-width="post.dimensions.width"
              :original-height="post.dimensions.height"
              :sizes="{
                l: {
                  media: 1024,
                  width: 1024,
                  height: 360,
                },
                m: {
                  media: 768,
                  width: 768,
                  height: 300,
                },
                s: {
                  media: 0,
                  width: 400,
                  height: 250,
                },
              }"
              :alt="post.thumbnail.alt"
              role="presentation"
              fit="crop"
            />
            <span class="title"> {{ post.title[$i18n.locale] }} </span>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { sanity } from '@/plugins/sanity'
import SanityImage from '@/components/SanityImageLQIP'
import LinkButton from '@/components/LinkButton'

const queryBlog = `
  *[ _type == "blog" && !(_id in path("drafts.**")) ] | order(pudlishedAt desc){
      title,
      slug,
      publishedAt,
      thumbnail,
      'dimensions': thumbnail.asset->metadata.dimensions,
    }[0..10]
`
export default {
  async asyncData(context) {
    const posts = await sanity.fetch(queryBlog, context.route.params)
    return { posts }
  },
  components: {
    SanityImage,
    LinkButton,
  },
}
</script>

<style lang="sass" scoped>
.back
  margin-bottom: 4rem
.sectionTitle
  +font-mobile-xxlarge
  margin-bottom: 4.0rem
  display: block
.blog
  hr
    height: 0.4rem
    margin: 0
  .posts
    display: flex
    flex-direction: column
  .post
    margin-bottom: 8.0rem
  .link
    text-decoration: none
    display: block
  .title
    +font-mobile-large
    display: block
    text-decoration: none
    margin: 1.6rem 0

@media only screen and (min-width: 48em)
  .back
    margin-bottom: 8rem
  .sectionTitle
    +font-desktop-xxlarge
</style>
