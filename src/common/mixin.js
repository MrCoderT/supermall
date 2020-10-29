// 混入
import { debounce } from '@/common/utils'
//goodsList的混入
export const itemListenerMixin = {
  data() {
    return {
      itemListener: null//保存全局事件的回调函数
    }
  },
  mounted() {
    //使用防抖函数监听每一张图片加载完成刷新BScroll，来提高性能
    let refresh = debounce(this.$refs.BScroll.refresh,  500)
    //将全局事件的回调放入一个变量里，用来以后取消在这个页面里的这个全局事件
    this.itemListener = () => {
      refresh()
    }
    //监听图片加载完成事件，然后刷新BScrol
    this.$bus.$on('itemImgLoad', this.itemListener)
  }
}