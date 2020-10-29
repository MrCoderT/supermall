<!-- 底部导航的子组件 -->
<template>
  <div class="tab_tab_item" @click="goPath">
    <div v-if="!isActive"><slot name='icon'></slot></div>
    <div v-else><slot name='icon_active'></slot></div>
    <div :class="{active:isActive}"><slot name='text'></slot></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  props: {
    path: String
  },
  methods: {
    goPath() {
      this.$router.push(this.path).catch(err => {err})
    }
  }
}
</script>

<style  scoped>
.tab_tab_item{
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.tab_tab_item img{
  margin: 5px 0 3px 0;
}
.active{
  color: #ff8198;
}
</style>
