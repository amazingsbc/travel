<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="data.swiperList"></home-swiper>
    <home-icons :iconList="data.iconList"></home-icons>
    <home-recommend :recommendList="data.recommendList"></home-recommend>
    <home-weekend :weekendList="data.weekendList"></home-weekend>
  </div>
</template>
<script>
// Compositon API
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { useStore } from 'vuex'
import { reactive,computed, onMounted, onActivated } from 'vue'

export default{
  name: 'Home',
    components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  setup() {
    // 自己定义的data不具备响应式处理
    const data = reactive({
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    })
    const store = useStore();
    const city = store.state.city
    // const city = computed(()=> {
    //   return store.state.city
    // })
// 这里变成了async 函数， 以前是使用promise .then 进行调用
    async function getHomeInfo() {
      let res = await axios.get('/api/index.json?city=' + city.value)
      res = res.data
      if (res.ret && res.data) {
        const result = res.data
        data.swiperList = result.swiperList
        data.iconList = result.iconList
        data.recommendList = result.recommendList
        data.weekendList = result.weekendList
      }
    }
    onMounted(()=>{
      getHomeInfo()
    })
    return { data }
  }
  // data () {
  //   return {
  //     lastCity: '',
  //     swiperList: [],
  //     iconList: [],
  //     recommendList: [],
  //     weekendList: []
  //   }
  // },
  // computed: {
  //   ...mapState(['city'])
  // },
  // methods: {
  //   getHomeInfo () {
  //     axios.get('/api/index.json?city=' + this.city)
  //       .then(this.getHomeInfoSucc)
  //   },
  //   getHomeInfoSucc (res) {
  //     res = res.data
  //     if (res.ret && res.data) {
  //       const data = res.data
  //       this.swiperList = data.swiperList
  //       this.iconList = data.iconList
  //       this.recommendList = data.recommendList
  //       this.weekendList = data.weekendList
  //     }
  //   }
  // },
  // mounted () {
  //   this.lastCity = this.city
  //   this.getHomeInfo()
  // },
  // activated () {
  //   if (this.lastCity !== this.city) {
  //     this.lastCity = this.city
  //     this.getHomeInfo()
  //   }
  // }
}
</script>

<style></style>
