<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="https://img1.qunarzz.com/vs_ceph_vs_tts/4370c9e0-2314-4da3-a076-7de97b06bc42.jpg_r_640x420x95_7dc4e088.jpg">
      <div class="banner-info">
        <div class="banner-title">郑州出发-自由行</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe61e;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      imgs: ['https://img1.qunarzz.com/vs_ceph_vs_tts/4370c9e0-2314-4da3-a076-7de97b06bc42.jpg_r_640x420x95_7dc4e088.jpg', 'https://img1.qunarzz.com/vs_ceph_vs_tts/7cd7e29b-a671-4216-b07f-d28d741f1dd5.jpg_r_1280x840x95_40f553a3.jpg'],
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
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
      background linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
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
