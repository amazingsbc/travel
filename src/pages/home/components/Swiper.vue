<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
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
import {computed} from 'vue'
export default{
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  setup(props) {
    const swiperOption = {
        pagination: '.swiper-pagination',
        loop: true
      }
    const swiperList = computed(()=>{
      var res = []
      props.list.forEach((item) => {
        var list = {
          id: item.id,
          imgUrl: item.imgUrl
        }
        res.push(list)
      })
      return res
    })
    const showSwiper = computed(()=> props.list.length )
    return {swiperOption, swiperList, showSwiper}
  },
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
