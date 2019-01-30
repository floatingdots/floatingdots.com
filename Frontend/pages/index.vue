<template>
  <div class="container">
    <section class="intro">
      <span class="heading">
        <span class="top">Design grow</span>
        <span class="bottom">
          <span class="your"> your </span>
          <Rotation />
        </span>
      </span>
      <h1 class="title" v-html="$t('top.copy')" />
    </section>

    <hr id="projects" />

    <section class="projects">
      <ul class="posts">
        <li
          v-for="(post, i) in projects"
          :key="i"
          :class="{ unavailable: !post.availability }"
          class="post"
        >
          <NuxtLink
            v-if="post.availability"
            :to="{
              name: `projects-slug___${$i18n.locale}`,
              params: { slug: post.slug.current },
            }"
            :class="{ unavailable: !post.availability }"
            :title="post.title[$i18n.locale]"
            class="title"
          >
            {{ post.title[$i18n.locale] }}
            <i v-if="post.availability" class="el-icon-back forward" />
          </NuxtLink>
          <div v-else :class="{ unavailable: !post.availability }" class="title">
            {{ post.title[$i18n.locale] }}
          </div>
          <div class="content">
            <span v-if="!post.availability" class="soon"> Detail will be available soon! </span>
            <NuxtLink
              v-if="post.availability"
              :to="{
                name: `projects-slug___${$i18n.locale}`,
                params: { slug: post.slug.current },
              }"
              :class="{
                unavailable: !post.availability,
              }"
              :title="post.title[$i18n.locale]"
              class="thumbnail"
            >
              <SanityImage
                v-if="post.thumbnail"
                :original-width="post.dimensions.width"
                :original-height="post.dimensions.height"
                :image="post.thumbnail"
                :w="600"
                :sizes="{
                  l: {
                    media: 1024,
                    width: 800,
                  },
                  m: {
                    media: 768,
                    width: 600,
                  },
                  s: {
                    media: 0,
                    width: 400,
                  },
                }"
                :alt="post.thumbnail.alt"
                class="image"
                :class="{ unavailable: !post.availability }"
                role="presentation"
                :lqip="post.lqip"
                :color="post.color"
                fit="clip"
              />
            </NuxtLink>
            <div
              v-else
              :class="{ unavailable: !post.availability }"
              class="thumbnail"
              title="post.title[$i18n.locale]"
            >
              <SanityImage
                v-if="post.thumbnail"
                :original-width="post.dimensions.width"
                :original-height="post.dimensions.height"
                :image="post.thumbnail"
                :w="post.thumbnail.maxWidth * 2"
                :sizes="{
                  s: {
                    media: 0,
                    width: post.thumbnail.maxWidth,
                  },
                }"
                :alt="post.thumbnail.alt"
                :class="{ unavailable: !post.availability }"
                class="image"
                :style="`max-width: ${post.thumbnail.maxWidth}px`"
                :lqip="post.lqip"
                :color="post.color"
                role="presentation"
                fit="clip"
              />
            </div>
          </div>
        </li>
      </ul>
    </section>
    <hr />

    <section class="secondHeading"><h2 class="weLove" v-html="$t('top.weLove')" /></section>
    <hr />

    <section v-if="blog.length > 0" class="blog">
      <span class="sectionTitle"> Blog </span>
      <ul class="posts">
        <li v-for="(post, i) in blog" :key="i" class="post">
          <NuxtLink
            :to="{
              name: `blog-slug___${$i18n.locale}`,
              params: { slug: post.slug.current },
            }"
            :title="post.title[$i18n.locale]"
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
    <hr />
    <Contact />
  </div>
</template>

<script>
import { sanity } from '@/plugins/sanity'
import SanityImage from '@/components/SanityImageLQIP'
import Contact from '@/components/Contact'
import Rotation from '@/components/Rotation'

const queryProjects = `
  *[ _type == "projects" && !(_id in path("drafts.**")) ] | order(priority desc) | order(pudlishedAt desc){
      availability,
      title,
      slug,
      publishedAt,
      thumbnail,
      'dimensions': thumbnail.asset->metadata.dimensions,
    }[0..2]
`
const queryBlog = `
  *[ _type == "blog" && !(_id in path("drafts.**")) ] | order(pudlishedAt desc){
      title,
      slug,
      publishedAt,
      thumbnail,
      'dimensions': thumbnail.asset->metadata.dimensions,
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
    Contact,
    Rotation,
  },
}
</script>

<style lang="sass" scoped>
.sectionTitle
  +font-mobile-huge
  margin-bottom: 4.0rem
  display: block

.forward
  transform: scaleX(-1)

.intro
  .heading
    display: block
    margin: 4.8rem 0 0 0
    letter-spacing: 0.05rem
  span
    display: block
    line-height: 1
  .top
    font-size: 2.6rem
    font-weight: 700
  .bottom
    margin-top: 0.2rem
    font-size: 3.6rem
    font-weight: 700
    display: flex
    flex-direction: row
  .your
    margin-right: 0.8rem
    display: inline-block
  .message
    position: relative
    white-space: nowrap
.title
    +font-mobile-base
    line-height: 1.2
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
        position: relative
      .soon
        position: absolute
        +font-mobile-large
        max-width: 72%
        z-index: 10
      .thumbnail
        transition: transform 250ms ease-in-out
        display: block
        &.unavailable
          opacity: 0.2
          filter: none
      .image
        margin: 0 0 0 auto
        // filter: drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.2))
      &.unavailable
        .thumbnail,
        .title
          pointer-events: none
    .post:hover
      .thumbnail:not(.unavailable)
        transform: scale(1.05)

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
  .post:not(:last-child)
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
  .sectionTitle
    +font-desktop-huge
  .intro
    .heading
      margin-bottom: 2.4rem
    .top
      font-size: 4rem
    .bottom
      font-size: 8rem
      font-weight: 700
      margin-top: -1rem
    .your
      margin-right: 1.6rem
  .title
    +font-desktop-base
    line-height: 1.4
  .projects
    .posts
      .post
        .title
          +font-desktop-huge
        .image
          max-width: 70%
  .weLove
    +font-mobile-huge
    max-width: 420px
    margin: 0 auto
</style>

<style lang="sass">
.weLove
  .small
    +font-mobile-xlarge
</style>
