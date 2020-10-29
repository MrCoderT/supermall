<!-- 顶部导航 -->
<template>
  <div class="nav_bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style  scoped>
.nav_bar{
  height: 44px;
  display: flex;
}
.left,.right{
  width: 60px;
}
.center{
  flex: 1;
  line-height: 44px;
  text-align: center;
}
</style>
