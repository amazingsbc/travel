<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img
          class="swiper-img"
          :src="item.imgUrl"
        />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default{
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: '//imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg'
      }, {
        id: '0002',
        imgUrl: '//imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet
    background #ffffff
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 30%
    background #eee
    .swiper-img
      width 100%

</style>
