<template>
    <ul class="list">
      <li
        class="item"
        v-for="item of letters"
        :key="item"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        :ref="elem => elems[item] = elem"
      >
        {{item}}
      </li>
    </ul>
</template>
<script>
import { computed, onUpdated,ref } from 'vue'
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  setup(props, context) {
    let touchStatus = false
    let startY = 0
    let timer = null
    const elems = ref([])
    const letters = computed(()=>{
      const letters = []
      for (let i in props.cities) {
        letters.push(i)
      }
      return letters
    })
    onUpdated(()=>{
      startY = elems.value['A'].offsetTop
    })
    function handleLetterClick(e){
      context.emit('change', e.target.innerText)
    }
    function handleTouchStart () {
      touchStatus = true
    }
    function handleTouchEnd () {
      touchStatus = false
    }
    function handleTouchMove (e) {
      if (touchStatus) {
        if (timer) {
          clearTimeout(timer)
          timer = null
        }
        timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - startY) / 20)
          if (index >= 0 && index < letters.value.length) {
            context.emit('change', letters.value[index])
          }
        }, 8)
      }
    } 
    return { elems,letters,handleLetterClick,handleTouchStart,handleTouchEnd,handleTouchMove }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },

  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    right 0
    top 1.58rem
    bottom 0
    width .4rem
    .item
      line-height .4rem
      text-align center
      color $bgColor
</style>
