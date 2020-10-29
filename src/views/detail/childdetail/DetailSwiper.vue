<!-- 商品详情页的轮播图 -->
<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item, index) in topImages" :key="index">
      <img :src="item" alt="item">
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper/index'

export default {
  data () {
    return {
    }
  },
  components: { Swiper, SwiperItem},
  props: {
    topImages: {
      type: Array
    }
  }
}
</script>

<style  scoped>
.detail-swiper {
  height:  250px;
  overflow: hidden;
}
</style>
