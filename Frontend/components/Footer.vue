<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <nav class="column">
          <ul class="nav">
            <li v-for="item in $t('nav')" :key="item.herf" class="item">
              <nuxt-link :to="{ path: localePath(item.href), hash: item.hash }" :title="item.title">
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <div class="column">
          <ul>
            <li class="email">
              <a href="mailto:hello@floatingdots.com"> hello@floatingdots.com </a>
            </li>
            <li class="address">
              <a href="https://maps.google.com/">
                25 W 39th St, Floor 10<br />
                New York, NY 10018
              </a>
            </li>
          </ul>
        </div>
      </div>
      <span class="copyright"> &copy; Floating Dots, LLC </span>
    </div>
  </footer>
</template>

<style lang="sass" scoped>
.footer
  margin-top: 4rem
  padding: 1.6rem $spacing-mobile
  background: $black
.container
  padding: 4rem 0 2.4rem 0
  ul
    margin: 0 0 8rem 0
  li
    margin: 0 0 4rem 0
    a
      +font-mobile-slarge
      font-weight: 700
      color: $white
      text-decoration: none
  &.inactive
    display: none
.copyright
  opacity: 0.5
  color: $white
  +font-mobile-small

@media only screen and (min-width: 48em)
  .footer
    padding: 1.6rem $spacing-desktop
  .container
    max-width: 1024px
    margin: 0 auto
    padding: 8rem $spacing-desktop 2.4rem $spacing-desktop
    ul
      margin: 0 0 4rem 0
  .columns
    display: flex
    flex-direction: row
    justify-content: space-between
    margin-bottom: 3.6rem
  .column
    flex: 0 0 47.5%
</style>
