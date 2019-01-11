<template>
  <div class="container">
    <section class="blog">
      <span class="sectionTitle"> Blog </span>
      <ul class="posts">
        <li v-for="(post, i) in blog" :key="i" class="post">
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
              :sizes="{
                l: { media: 64, width: 1200, height: 300 },
                m: { media: 48, width: 800, height: 300 },
                s: { media: 0, width: 400, height: 300 },
              }"
              :alt="post.thumbnail.alt"
              role="presentation"
              fit="clip"
            />
            <span class="title"> {{ post.title[$i18n.locale] }} </span>
          </NuxtLink>
          <hr />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { sanity } from '@/plugins/sanity'
import SanityImage from '@/components/SanityImage'

const queryProjects = `
  *[ _type == "projects" && !(_id in path("drafts.**")) ] | order(priority desc) | order(pudlishedAt desc){
      availability,
      title,
      slug,
      publishedAt,
      thumbnail,
    }[0..2]
`
const queryBlog = `
  *[ _type == "blog" && !(_id in path("drafts.**")) ] | order(pudlishedAt desc){
      title,
      slug,
      publishedAt,
      thumbnail,
    }[0..2]
`
export default {
  async asyncData(context) {
    const projects = await sanity.fetch(queryProjects, context.route.params)
    const blog = await sanity.fetch(queryBlog, context.route.params)
    return { projects, blog }
  },
  components: {
    SanityImage,
  },
  data() {
    return {
      items: ['Products', 'Team', 'Services', 'Company'],
    }
  },
}
</script>

<style lang="sass" scoped>
.sectionTitle
  +font-mobile-huge
  margin-bottom: 4.0rem
  display: block

.intro
  .heading
    display: block
    margin: 4.8rem 0 0 0
    letter-spacing: 0.05rem
    span
      display: block
      line-height: 1
    .top
      font-size: 2.8rem
      font-weight: 700
    .bottom
      margin-top: 0.2rem
      font-size: 4.2rem
      font-weight: 700
      display: flex
      flex-direction: row
    .your
      margin-right: 0.8rem
    .message
      position: relative
      li:nth-child(2)
        animation-delay: 1200ms
      li:nth-child(3)
        animation-delay: 1200*2ms
      li:nth-child(4)
        animation-delay: 1200*3ms
    .item
      opacity: 0
      position: absolute
      animation: animate 1200*4ms ease-in-out infinite
    @keyframes animate
      0%
        opacity: 0
      5%
        opacity: 0
        transform: translateY(-5px)
      10%
        opacity: 1
        transform: translateY(0px)
      25%
        opacity: 1
        transform: translateY(0px)
      30%
        opacity: 0
        transform: translateY(10px)
      80%
        opacity: 0
      100%
        opacity: 0

  .title
    +font-mobile-base
    margin-bottom: 5.6rem

.projects
  .posts
    .post
      margin-bottom: 8.0rem
      display: flex
      flex-direction: column
      .title
        +font-mobile-xlarge
        text-decoration: none
        margin: 0 0 2.4rem 0
      .content
        display: flex
        align-items: center
      .soon
        position: absolute
        +font-mobile-large
        max-width: 72%
        z-index: 10
      .thumbnail
        margin: 0 0 0 auto
        max-width: 72%
        filter: drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.2))
        &.unavailable
          opacity: 0.2
          filter: none
      &.unavailable
        .thumbnail,
        .title
          pointer-events: none

.weLove
  +font-mobile-huge
  font-size: 3.2rem
  letter-spacing: 0.05rem

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
  .intro
    .heading
      margin-bottom: 2.4rem
      .top
        font-size: 4rem
      .bottom
        font-size: 8rem
        font-weight: 700
        margin-top: -1rem
    .title
      +font-desktop-medium
      line-height: 1.2

  .projects
    .posts
      .post
        .title
          +font-desktop-huge
</style>

<style lang="sass">
.weLove
  .small
    +font-mobile-xlarge
</style>
s
