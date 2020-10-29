<!-- 底部导航组件 -->
<template>
  <div class="tab_bar">
    <slot></slot>
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
.tab_bar{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  background-color: #f1f1f1;
  box-shadow: 0 1px 3px rgba(100, 100, 100, .5);
  height: 49px;
}
</style>
