<!-- 火热商品的导航 -->
<template>
  <div class="tab_control">
    <div v-for="(item, index) in title" :key="index" @click="tabControlClick(index)">
      <span :class="{active:index == flag}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flag: 0
    }
  },
  props: {
    title: Array
  },
  methods: {
    tabControlClick(index){
      this.flag = index
      this.$emit('tabControlClick', index)
    }
  }
}
</script>

<style  scoped>
.tab_control{
  display: flex;
  height: 44px;
  line-height: 44px;
  background-color: var(--color-background);
}
.tab_control div{
  flex: 1;
  text-align: center;
}
.active{
  color: var(--color-high-text);
  border-bottom: 1px solid var(--color-high-text);
  padding: 0 3px 6px 3px;
}
</style>
