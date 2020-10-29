<template>
  <div id="app">
    <!-- 显示内容 -->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <!-- 底部导航 -->
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './components/content/maintabbar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import 'assets/css/base.css';
</style>
