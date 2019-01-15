<template>
  <ul class="messages">
    <li ref="delay0" class="item">products📱</li>
    <li ref="delay1" class="item">team 🐶🐹</li>
    <li ref="delay2" class="item">services 🍜</li>
    <li ref="delay3" class="item">company 🏢</li>
  </ul>
</template>

<script>
import { TimelineMax, Linear } from 'gsap'

export default {
  mounted() {
    this.bang()
  },
  methods: {
    bang() {
      const { delay0, delay1, delay2, delay3 } = this.$refs
      const timeline = new TimelineMax({ repeat: -1 })
      const inDuration = 0.25
      const outDuration = 0.25
      const time = 0.7
      const inY = 5
      const outY = -10
      timeline
        .fromTo(
          delay0,
          inDuration,
          {
            y: inY,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: Linear.EaseInOut,
          }
        )
        .to(delay0, outDuration, {
          y: outY,
          opacity: 0,
          delay: time,
          ease: Linear.EaseInOut,
        })
        .fromTo(
          delay1,
          inDuration,
          {
            y: inY,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: Linear.EaseInOut,
          }
        )
        .to(delay1, outDuration, {
          y: outY,
          opacity: 0,
          delay: time,
          ease: Linear.EaseInOut,
        })
        .fromTo(
          delay2,
          inDuration,
          {
            y: inY,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: Linear.EaseInOut,
          }
        )
        .to(delay2, outDuration, {
          y: outY,
          opacity: 0,
          delay: time,
          ease: Linear.EaseInOut,
        })
        .fromTo(
          delay3,
          inDuration,
          {
            y: inY,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: Linear.EaseInOut,
          }
        )
        .to(delay3, outDuration, {
          y: outY,
          opacity: 0,
          delay: time,
          ease: Linear.EaseInOut,
        })
      timeline.play()
    },
  },
}
</script>

<style lang="sass" scoped>
.item
  opacity: 0
  position: absolute
</style>
