<template>
  <section class="contact">
    <LinkButton class="back" text="backToHome" url="index" />
    <h1 class="heading">{{ $t('contact.heading') }}</h1>
    <Form class="form" />
    <div class="email">
      <span class="or">or</span>
      <span class="emailUs"
        >Email us at <a href="mailto:hi@floatingdots.com"> hello@floatingdots.com </a></span
      >
    </div>
    <div class="office">
      <span class="title"> Office </span>
      <div class="location">
        <span class="address">
          530 Fifth Ave, Floor 9<br />
          New York, NY 10036
        </span>
        <a
          rel="nofollow,noopener"
          href="https://goo.gl/maps/nkV7YcpUXHkzbWEs5"
          target="_blank"
          class="open"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Form from '@/components/Form'
import LinkButton from '@/components/LinkButton'

export default {
  components: {
    Form,
    LinkButton,
  },
}
</script>

<style lang="sass" scoped>
.back
  margin-bottom: 4rem

.heading
  +font-mobile-xxlarge
  display: block
  margin-bottom: 5.6rem
.title
  +font-mobile-xlarge
  display: block
  margin-bottom: 2.4rem
.form
  max-width: 560px
.office
  margin: 12rem 0 0 0
.email
  margin: 0 0 6.4rem 0
  span
    line-height: 1.4
    +font-mobile-medium
.or,
.emailUs
  padding-top: 1.6rem
  display: block
.location
  span,
  a
    +font-mobile-medium
    display: block
    margin-bottom: 2.4rem
  .map
    height: 300px

@media only screen and (min-width: 48em)
  .heading
    +font-desktop-xxlarge
  .back
    margin-bottom: 8rem
  .title
    +font-desktop-xlarge
    span
      +font-desktop-medium
</style>
