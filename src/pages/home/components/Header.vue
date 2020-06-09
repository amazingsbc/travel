<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe743;</div>
    </div>
    <div class="header-input">
      <span class="iconfont search-icon">&#xe625;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe708;</span>
    </div>
  </div>
</template>
<script>
export default{
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: .86rem
    background $bgColor
    color #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align center
        font-size .5rem
    .header-input
      flex: 1
      height .64rem
      margin-top: .12rem
      line-height .64rem
      margin-left: .2rem
      background: #ffffff
      border-radius: .1rem
      color: #ccc
      padding-left .2rem
      .search-icon
        font-size .3rem
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      .arrow-icon
        margin-left -.06rem
        font-size .28rem
</style>
