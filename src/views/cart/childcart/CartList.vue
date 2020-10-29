<!-- 购物车商品列表 -->
<template>
  <div class="cart_list">
    <CartListItem v-for="(item,index) in cartProduct" :product="item" :key="index" />
  </div>
</template>

<script>
import CartListItem from './CartListItem'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['cartProduct'])
  },
  components: {CartListItem}
}
</script>

<style  scoped>

</style>
