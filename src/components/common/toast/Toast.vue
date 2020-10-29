<!-- 提示的弹窗 -->
<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message='提示信息', duration=2000) {
      this.message = message
      this.isShow = true
      setTimeout(() => {
        this.message = ''
        this.isShow = false
      }, duration)
    }
  }
}
</script>

<style  scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,50%);
  z-index: 999;
  padding: 10px 15px;
  background-color: rgba(0, 0, 0, .7);
  color: #fff;
}
</style>
