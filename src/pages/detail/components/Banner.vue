<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe61e;</span>
          {{bannerImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary
        :imgs="bannerImgs"
        v-show="showGallary"
        @close="handleGallaryClose"
      ></common-gallary>
    </fade-animation>
  </div>
</template>
<script>
import { ref } from 'vue'
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fadeanimation/FadeAnimation.vue'

export default {
  name: 'DetailBanner',
    components: {
    FadeAnimation,
    CommonGallary
  },
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  setup(){
    const showGallary = false
    function handleBannerClick() {
      showGallary = true
    }
    function handleGallaryClose () {
      showGallary = false
    }
    return {showGallary, handleBannerClick, handleGallaryClose}
  }
}
</script>
<style lang="stylus" scoped="">
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      color #ffffff
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      background linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        margin-top .14rem
        line-height .4rem
        height .32rem
        padding 0 .4rem
        border-radius .2rem
        background rgba(0,0,0,.8)
        font-size .24rem
        .banner-icon
          font-size .26rem
</style>
