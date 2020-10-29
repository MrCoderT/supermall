<!-- 购物车商品选中与否按钮 -->
<template>
  <div :class="{check_button:true, active:product.checked}">
    <img src="@/assets/img/cart/tick.svg" alt="选中">
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style  scoped>
 .check_button {
  border: 2px solid #bdc3c7;
  border-radius: 50%;
  }
  .active {
    background-color: pink;
    border: 2px solid pink;
  }
</style>
