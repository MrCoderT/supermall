<!-- better-scroll -->
<template>
  <div ref="wrap" class="wrap">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      BScroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    const wrap = this.$refs.wrap
    this.BScroll = new BScroll(wrap, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    //监听BScroll的滚动位置，最好做一个判断
    if(this.probeType == 2 || this.probeType == 3){
      this.BScroll.on('scroll', options => {
        this.$emit('scroll', options)
      })
    }
    //监听BScroll的上拉加载，最好做一个判断
    if(this.pullUpLoad){
      this.BScroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }
  },
  methods: {
    //回到经过time时间到达(x,y)位置
    backTop(x, y, time = 0){
      this.BScroll && this.BScroll.scrollTo(x, y, time)
    },
    //停止上拉加载
    finishPullUp(){
      this.BScroll && this.BScroll.finishPullUp()
    },
    //BScroll刷新
    refresh() {
      this.BScroll && this.BScroll.refresh()
    },
    //获得scroll的垂直移动距离
    getScrollY() {
      return this.BScroll.y
    }
  }
}
</script>

<style  scoped>
  
</style>
