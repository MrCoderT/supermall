<!-- 首页轮播图 -->
<template>
  <swiper>
      <swiper-item v-for="(item,index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="item.title" @load="imgLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper'

export default {
  data () {
    return {
      isLoad: true//判断图片是否加载完成
    }
  },
  props: {
    banner: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {Swiper, SwiperItem},
  methods: {
    imgLoad() {
      //因为轮播图有四张一样的图片，它会发出四次同样的事件，而我们为了性能只需要一次就好了
      if(this.isLoad){
        this.$emit('swiperImgLoad')
        this.isLoad = false
      }
    }
  }
}
</script>

<style  scoped>

</style>
