<!-- 底部导航 -->
<template>
  <div>
    <tab-bar>
      <tab-bar-item path='/home'>
        <img slot="icon" src="@/assets/img/tabbar/home.svg" />
        <img slot="icon_active" src="@/assets/img/tabbar/home_active.svg" />
        <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/classify'>
        <img slot="icon" src="@/assets/img/tabbar/classify.svg" />
        <img slot="icon_active" src="@/assets/img/tabbar/classify_active.svg" />
        <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <img slot="icon" src="@/assets/img/tabbar/cart.svg" />
        <img slot="icon_active" src="@/assets/img/tabbar/cart_active.svg" />
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/prefile'>
        <img slot="icon" src="@/assets/img/tabbar/prefile.svg" />
        <img slot="icon_active" src="@/assets/img/tabbar/prefile_active.svg" />
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from '@/components/common/tabbar/TabBarItem';

export default {
  data () {
    return {
    }
  },
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style  scoped>

</style>
