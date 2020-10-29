<!-- 首页 -->
<template>
  <div class="home">
    <!-- 顶部导航 -->
    <nav-bar class="nav_bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 火热商品的导航的副本，用来替换第本体 -->
    <tab-control ref="tabControlVice" class="tab_control_vice" @tabControlClick="tabControlClick" 
    :title='title' v-show="tabConIsShow" />
    <better-scroll ref="BScroll" class="content" 
    @scroll='scroll' :probe-type='3' :pull-up-load="true"
    @pullingUp="loadMore">
      <!-- 轮播图 -->
      <home-swiper :banner='banner' @swiperImgLoad='swiperImgLoad' />
      <!-- 商品推荐 -->
      <homeRecommend class="recommend" :recommend='recommend' />
      <!-- 本周流行 -->
      <feature-view />
      <!-- 火热商品的导航 -->
      <tab-control :class="{isFixed: tabConIsShow}" ref="tabControl" @tabControlClick="tabControlClick" :title='title' />
      <!-- 商品列表 -->
      <goods-list class="goods" :goodsList = 'goods[currentType].list' />
    </better-scroll>
    <back-top @click.native="backTop" v-show="isBackTopShow" />
  </div>
</template>

<script>
//引入组件
import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from './childhome/HomeSwiper'
import HomeRecommend from './childhome/HomeRecommend'
import FeatureView from './childhome/FeatureView'
import TabControl from '@/components/content/tabcontrol/TabControl'
import GoodsList from '@/components/content/goodslist/GoodsList'
import BetterScroll from '@/components/common/betterscroll/BetterScroll'
import BackTop from '@/components/content/backtop/BackTop'
//获取数据
import { getMultiData, getGoodsData } from '@/network/home'
//获取工具脚本
import { itemListenerMixin } from '@/common/mixin'

export default {
  data () {
    return {
      banner: [],//存放轮播图数据
      recommend: [],//存放商品推荐数据
      title: ['流行', '新款', '精选'],//火热商品的导航
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },//存放商品列表数据
      currentType: 'pop',//动态传入商品名来获得指定商品列表
      isBackTopShow: false,//控制返回顶部按钮的显隐
      tabConOffsetTop: 0,//记录TabControl的offsetTop
      tabConIsShow: null,//控制TabControl副本的显隐
      scrollY: 0//记录页面所处的位置
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    GoodsList,
    BetterScroll,
    BackTop
  },
  mixins: [itemListenerMixin],
  created() {
    //获取轮播图和商品推荐数据
    this.getMultiData()
    //获取第一页的商品列表数据
    this.getGoodsData('pop')
    this.getGoodsData('new')
    this.getGoodsData('sell')
  },
  //created是在DOM元素挂载之前，可能拿不到DOM元素,所以需要在mounted里获取
  mounted() {
  },
  /* 就算使用了keep-alive来使页面不会被销毁，但是beeter-scroll有时候还是会出问
  所以需要自己来记录一下离开的位置，然后进页面的时候提取这个距离 */
  activated() {
    this.$refs.BScroll.backTop(0,this.scrollY)
    //有时候会自动回到顶部，所以最好能刷新一下better-scroll
    this.$refs.BScroll.refresh()
  },
  deactivated() {
    this.scrollY = this.$refs.BScroll.getScrollY()
    //离开首页后取消图片加载的全局事件
    this.$bus.$off('itemImgLoad', this.itemListener)
  },
  methods: {
    //获取多个数据
    getMultiData() {
      getMultiData().then(res=>{
        // 轮播图数据
        this.banner = res.data.data.banner.list
        // 商品推荐数据
        this.recommend = res.data.data.recommend.list
      })
    },
    // 获取商品列表数据
    getGoodsData(type) {
      const page = this.goods[type].page+1
      getGoodsData(type,page).then(res => {
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page+=1
        //停止上拉加载
        this.$refs.BScroll.finishPullUp()
      })
    },
    //点击切换商品列表内容
    tabControlClick(index){
      switch(index){
        case 0: this.currentType = 'pop';
          break;
        case 1: this.currentType = 'new';
          break;
        case 2: this.currentType = 'sell';
          break;
      }
      this.$refs.tabControl.flag = index
      this.$refs.tabControlVice.flag = index
    },
    //回到顶部
    backTop() {
      this.$refs.BScroll.backTop(0, 0, 500)
    },
    //获取BScroll的滚动位置
    scroll(options) {
      // //backTop按钮的显示与隐藏
      this.isBackTopShow = options.y < -1000
      // //设置TabControl的副本的显隐
      this.tabConIsShow = this.tabConOffsetTop < (-options.y)
    },
    //上拉加载更多
    loadMore() {
      this.getGoodsData(this.currentType)
    },
    //监听轮播图图片加载完成
    swiperImgLoad() {
      /* 获取TabControl距离定位父元素（body）的高度，$el获取到组件代表的元素
    但是因为图片可能还没加载所以获取的高度可能不准确，所以要等到图片加载完成再获取高度
    因为TabControl前面的图片就轮播图的比较大，所以只需要监听轮播图图片的加载完成就好了 */
    this.tabConOffsetTop = this.$refs.tabControl.$el.offsetTop
    }
  }
}
</script>

<style  scoped>
.home{
  height: 100vh;
}
.nav_bar{
  background-color: var(--color-tint);
}
.nav_bar div {
  color: #fff;
  font-size: 20px;
}
.recommend{
  padding: 10px 0 30px 0;
  border-bottom: 10px solid #e1e1e1;
}
.content{
  position: relative;
  height: calc(100% - 93px);
  overflow: hidden;
}
.tab_control_vice{
  position: relative;
  z-index: 9;
}
.isFixed {
  display: none;
}
</style>
