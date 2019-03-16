<template>
  <section class="studio">
    <LinkButton class="back" text="backToHome" url="index" />
    <div class="list">
      <div class="item">
        <h1 class="title" v-html="$t('studio.sketch.title')" />
        <div class="bottom">
          <p class="text" v-html="$t('studio.sketch.text')" />
          <SanityImage
            v-if="images[0] && images[0].image"
            :image="images[0].image"
            :original-width="images[0].dimensions.width"
            :original-height="images[0].dimensions.height"
            :w="400"
            :h="250"
            :sizes="{
              m: { media: 768, width: 768, height: 400 },
              s: { media: 0, width: 400, height: 250 },
            }"
            :alt="images[0].image.alt"
            :color="images[0].color"
            role="presentation"
            fit="clip"
            class="image"
          />
        </div>
      </div>
      <div class="item">
        <h2 class="title" v-html="$t('studio.harmony.title')" />
        <div class="bottom">
          <p class="text" v-html="$t('studio.harmony.text')" />
          <SanityImage
            v-if="images[1] && images[1].image"
            :image="images[1].image"
            :original-width="images[1].dimensions.width"
            :original-height="images[1].dimensions.height"
            :w="400"
            :h="250"
            :sizes="{
              m: { media: 768, width: 768, height: 400 },
              s: { media: 0, width: 400, height: 250 },
            }"
            :alt="images[1].image.alt"
            :color="images[1].color"
            role="presentation"
            fit="clip"
            class="image"
          />
        </div>
      </div>
      <div class="item">
        <h2 class="title" v-html="$t('studio.analog.title')" />
        <div class="bottom">
          <p class="text" v-html="$t('studio.analog.text')" />
          <SanityImage
            v-if="images[2] && images[2].image"
            :image="images[2].image"
            :original-width="images[2].dimensions.width"
            :original-height="images[2].dimensions.height"
            :w="400"
            :h="250"
            :sizes="{
              m: { media: 768, width: 768, height: 400 },
              s: { media: 0, width: 400, height: 250 },
            }"
            :lqip="images[2].lqip"
            :alt="images[2].image.alt"
            :color="images[2].color"
            role="presentation"
            fit="clip"
            class="image"
          />
        </div>
      </div>
    </div>
    <hr />
    <Contact />
  </section>
</template>

<script>
import { sanity } from '@/plugins/sanity'
import blocksToHtml from '@sanity/block-content-to-html'
import SanityImage from '@/components/SanityImageLQIP'
import Contact from '@/components/Contact'
import LinkButton from '@/components/LinkButton'

const queryPost = `
*[_type == 'media'&& 'studio' in page &&!(_id in path("drafts.**"))]{
  image,
  'dimensions': image.asset->metadata.dimensions,
  'lqip': image.asset->metadata.lqip,
  'color': image.asset->metadata.palette.dominant.background,
}`
export default {
  components: {
    SanityImage,
    LinkButton,
    Contact,
  },
  async asyncData(context) {
    const images = await sanity.fetch(queryPost, context.route.params)
    return { images }
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
}
</script>

<style lang="sass" scoped>
.back
  margin-bottom: 4rem

.item
  margin: 0 0 9.6rem 0
  .title
    +font-mobile-xxlarge
  .bottom
    .text
      +font-mobile-medium
      font-weight: 500
      max-width: 80%
    .image
      width: 80%
      margin: 0 0 0 auto

@media only screen and (min-width: 48em)
  .item
    .title
      +font-desktop-xxlarge
    .bottom
      .text
        +font-desktop-slarge
        max-width: 560px
      .image
        flex-basis: 50%

@media only screen and (min-width: 64em)
  .back
    margin-bottom: 8rem

  .item
    .bottom
      flex-direction: row
      justify-content: space-around
      .text
        font-weight: 500
</style>
