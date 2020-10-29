<!-- 首页商品推荐 -->
<template>
  <div class="recommend">
    <div class="recommend_item" v-for="item in recommend" :key='item.sort'>
      <a :href="item.link">
        <img :src="item.image" alt="item.title">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    recommend: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style  scoped>
.recommend{
  display: flex;
  width: 100%;
}
.recommend_item{
  flex: 1;
  width: 20%;
  text-align: center;
  font-size: 14px;
}
.recommend_item img{
  width: 90%;
  display: block;
  margin: 0 auto 10px auto;
}
</style>
