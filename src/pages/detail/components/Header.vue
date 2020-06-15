<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs"
    >
      <div class="iconfont header-abs-back">&#xe743;</div>
    </router-link>
    <div
      class="header-fix"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to="/">
        <div class="iconfont header-fix-back">&#xe743;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped="">
  @import "~styles/varibles.styl"
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    border-radius .4rem
    background rgba(0, 0, 0, .8)
    text-align center
    line-height .8rem
    .header-abs-back
      color #ffffff
      font-size .4rem
  .header-fix
    z-index 2
    position fixed
    top 0
    left 0
    right 0
    color #ffffff
    height $headerHeight
    line-height $headerHeight
    text-align center
    background $bgColor
    font-size .32rem
    .header-fix-back
      position absolute
      top 0
      left 0
      text-align center
      width .64rem
      font-size .4rem
      color #fff
</style>
