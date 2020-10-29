<!-- 回到顶部 -->
<template>
  <div class="back_top">
    <img src="~@/assets/img/common/top.png" alt="返回顶部">
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
.back_top{
  position: fixed;
  bottom:50px;
  right: 15px;
  z-index: 9;
}
.back_top img{
  width: 50px;
}
</style>
