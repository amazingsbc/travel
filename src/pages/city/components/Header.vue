<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe743;</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    position relative
    overflow hidden
    color #ffffff
    height $headerHeight
    line-height $headerHeight
    text-align center
    background $bgColor
    font-size .32rem
    .header-back
      position absolute
      top 0
      left 0
      text-align center
      width .64rem
      font-size .4rem
      color #fff
</style>
