<!-- 商品详情的导航 -->
<template>
    <nav-bar>
      <div slot="left" class="left" @click="back">
        <img src="@/assets/img/common/back.svg" alt="返回">
      </div>
      <div slot="center" class="center">
        <div v-for="(item, index) in title" :class="{ active: index == flag }" 
        :key="index" @click="active(index)">{{item}}</div>
      </div>
    </nav-bar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  data () {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      flag: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    back() {
      this.$router.back()
    },
    active(index) {
      this.flag = index
      this.$emit('goHere',index)
    }
  }
}
</script>

<style  scoped>
.center {
  display: flex;
}
.center div {
  flex: 1;
  font-size: 14px;
}
.left img {
  margin: 11px 0 0 20px;
}
.active {
  color: var(--color-high-text);
}
</style>
