<template>
  <section class="studio">
    <div class="list">
      <div class="item">
        <h1 class="title" v-html="$t('studio.sketch.title')" />
        <div class="bottom">
          <p class="text" v-html="$t('studio.sketch.text')" />
          <div class="image">
            <SanityImage
              v-if="images[0] && images[0].image"
              :image="images[0].image"
              :w="400"
              :h="100"
              :sizes="{
                m: { media: 48, width: 700, height: 525 },
                s: { media: 0, width: 400, height: 300 },
              }"
              :alt="images[0].image.alt"
              role="presentation"
              fit="clip"
            />
          </div>
        </div>
      </div>
      <div class="item">
        <h2 class="title" v-html="$t('studio.harmony.title')" />
        <div class="bottom">
          <p class="text" v-html="$t('studio.harmony.text')" />
          <SanityImage
            v-if="images[1] && images[1].image"
            :image="images[1].image"
            :w="400"
            :h="300"
            :sizes="{
              m: { media: 48, width: 700, height: 525 },
              s: { media: 0, width: 400, height: 300 },
            }"
            :alt="images[1].image.alt"
            class="image"
            role="presentation"
            fit="clip"
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
            :w="400"
            :h="300"
            :sizes="{
              m: { media: 48, width: 700, height: 525 },
              s: { media: 0, width: 400, height: 300 },
            }"
            :alt="images[2].image.alt"
            class="image"
            role="presentation"
            fit="clip"
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
// import LinkButton from '@/components/LinkButton'

const queryPost = `
*[_type == 'media'&& 'studio' in page &&!(_id in path("drafts.**"))]{
  image
}`
export default {
  components: {
    SanityImage,
    // LinkButton,
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
.item
  margin: 0 0 9.6rem 0
  .title
    +font-mobile-xxlarge
  .bottom
    // display: flex
    // flex-direction: column
    .text
      +font-mobile-slarge
      font-weight: 500
      max-width: 80%
    .image
      width: 80%
      margin: 0 0 0 auto

@media only screen and (min-width: 48em)
  .item
    .title
      +font-desktop-huge
    .bottom
      .text
        +font-desktop-slarge
        max-width: 560px
      .image
        flex-basis: 50%
        // max-width: 50%

@media only screen and (min-width: 64em)
  .item
    .bottom
      flex-direction: row
      justify-content: space-around
      .text
        font-weight: 500
      .image
        // width: 400px
        // height: 300px
        // margin-left: 4rem
</style>
