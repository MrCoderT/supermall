<!-- 购物车 -->
<template>
  <div class="cart">
    <!-- 顶部导航 -->
    <nav-bar class="nav_bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <better-scroll class="center" ref="BScroll">
      <!-- 商品列表 -->
      <cart-list />
    </better-scroll>
    <!-- 底部导航 -->
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import CartList from './childcart/CartList'
import BetterScroll from '@/components/common/betterscroll/BetterScroll'
import CartBottomBar from './childcart/CartBottomBar'
//导入vuex里的所有getters
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  components: {
    NavBar,
    CartList,
    BetterScroll,
    CartBottomBar
  },
  computed: {
    //获取vuex里的所有getters
    ...mapGetters(['cartLength'])
  },
  activated() {
    this.$refs.BScroll.refresh()
  }
}
</script>

<style  scoped>
.cart {
  height: 100vh;
}
.nav_bar {
  background-color: var(--color-tint);
  color: #fff;
}
.center {
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
</style>
