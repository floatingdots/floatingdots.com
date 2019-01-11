<template>
  <section class="careers">
    <!-- <LinkButton
      url="/"
    /> -->
    <h1 class="title">
      Let's build great products<br />
      and careers together.
    </h1>
    <SanityImage
      v-if="images && images[0] && images[0].image"
      :image="images[0].image"
      :original-width="images[0].dimensions.width"
      :original-height="images[0].dimensions.height"
      :w="400"
      :h="250"
      :sizes="{
        l: { media: 1024, width: 1200, height: 500 },
        m: { media: 768, width: 768, height: 400 },
        s: { media: 0, width: 400, height: 250 },
      }"
      :lqip="images[0].lqip"
      :alt="images[0].image.alt"
      :color="images[0].color"
      role="presentation"
      fit="clip"
      class="image"
    />

    <ul class="list">
      <li v-for="(item, index) in $t('careers.list')" :key="index" class="item">
        <h2 class="title">{{ item.title }}</h2>
        <div class="bottom">
          <p class="text">{{ item.text }}</p>
        </div>
      </li>
    </ul>

    <hr />

    <span class="title open"> Open Positions </span>
    <p v-if="positions && positions.length < 1" class="unavailable">
      {{ $t('careers.unavailable') }}
    </p>

    <ul v-else class="list positions">
      <li v-for="(item, index) in positions" :key="index" class="item">
        <NuxtLink
          :to="{
            name: `careers-slug___${$i18n.locale}`,
            params: { slug: item.slug.current },
          }"
          class="link"
        >
          <span class="title"> {{ item.title[$i18n.locale] }} </span>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script>
import { sanity } from '@/plugins/sanity'
import SanityImage from '@/components/SanityImageLQIP'
// import LinkButton from '@/components/LinkButton'

const queryImaegs = `
  *[_type == 'media' && 'careers' in page && !(_id in path("drafts.**"))]{
    image,
    'dimensions': image.asset->metadata.dimensions,
    'lqip': image.asset->metadata.lqip,
    'color': image.asset->metadata.palette.dominant.background,
}`

const queryPositions = `
  *[ _type == "careers" && availability && !(_id in path("drafts.**")) ] | order(priority desc) | order(pudlishedAt desc){
      title,
      slug
  }`

export default {
  async asyncData(context) {
    const images = await sanity.fetch(queryImaegs, context.route.params)
    const positions = await sanity.fetch(queryPositions, context.route.params)
    return { images, positions }
  },
  components: {
    SanityImage,
  },
}
</script>

<style lang="sass" scoped>
h1.title,
.title.open
  +font-mobile-xxlarge
  line-height: 1.2
  letter-spacing: 0.02rem
  margin-bottom: 8rem
.title.open
  display: block
  margin-bottom: 4rem

.image
  margin: 0 0 8rem 0

.item
  margin: 0 0 6.4rem 0
  .title
    +font-mobile-xlarge
  .bottom
    display: flex
    flex-direction: column
    .text
      +font-mobile-slarge
      font-weight: 500
      max-width: 80%
    .image
      max-width: 80%
      margin: 0 0 0 auto

.unavailable
  +font-mobile-slarge
  font-weight: 500
.positions
  .item
    margin-bottom: 2.4rem
    .title
      +font-mobile-slarge
@media only screen and (min-width: 48em)
  h1.title,
  .item
    max-width: 640px
</style>
