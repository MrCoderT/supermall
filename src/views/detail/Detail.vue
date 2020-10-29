<!-- 商品详情 -->
<template>
  <div class="detail">
    <!-- 导航栏 -->
    <detail-nav-bar ref="denav" class="detail_nav_bar" @goHere="goHere" />
    <better-scroll class="center" ref="BScroll" @scroll="scroll" :probe-type='3'>
      <!-- 轮播图 -->
      <detail-swiper :top-images="topImages" />
      <!-- 商品介绍 -->
      <goods-info :goods="goods" />
      <!-- 商家介绍 -->
      <shop-info :shop="shop" />
      <!-- 商品详情 -->
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad" />
      <!-- 商品参数 -->
      <detail-param-info ref="param" :param-info="paramInfo" />
      <!-- 评论信息 -->
      <detail-comment-info ref="comment" :commentInfo="commentInfo" />
      <!-- 商品推荐 -->
      <goods-list ref="rem" :goods-list="recommend" />
    </better-scroll>
    <detail-bottom-bar @addCart="addCartProduct" />
    <back-top @click.native="backTop"  v-show="isBackTopShow" />
  </div>
</template>

<script>
//引入组件
import DetailNavBar from './childdetail/DetailNavBar'
import DetailSwiper from './childdetail/DetailSwiper'
import GoodsInfo from './childdetail/GoodsInfo'
import ShopInfo from './childdetail/ShopInfo'
import DetailGoodsInfo from './childdetail/DetailGoodsInfo'
import DetailParamInfo from './childdetail/DetailParamInfo'
import DetailCommentInfo from './childdetail/DetailCommentInfo'
import GoodsList  from '@/components/content/goodslist/GoodsList'
import BetterScroll from '@/components/common/betterscroll/BetterScroll'
import DetailBottomBar from './childdetail/DetailBottomBar'
import BackTop from '@/components/content/backtop/BackTop'
//获取数据
import { getDetail, Goods, Shop, GoodsParam, getRecommend } from '@/network/detail'
//获取工具脚本
import { itemListenerMixin } from '@/common/mixin'
//导入vuex的actions
import { mapActions } from 'vuex'

export default {
  name: 'Detail',
  data () {
    return {
      iid: null,//商品的iid
      topImages: [],//轮播图数据
      goods: {},//商品信息数据
      shop: {},//商店信息数据
      detailInfo: {},//商品详情
      paramInfo: {},//商品参数
      commentInfo: {},//评论信息
      recommend: [],//推荐数据
      topY: [],//保存每个导航item的offsetTop
      curr: 0,//判断for循环
      isBackTopShow: false//控制返回顶部按钮的显隐
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    BetterScroll,
    GoodsInfo,
    ShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop
  },
  mixins: [itemListenerMixin],
  created() {
    //获取详情数据
    this.iid = this.$route.query.iid
    getDetail(this.iid).then(res => {
      let resData = res.data.result
      //轮播图数据
      this.topImages = resData.itemInfo.topImages
      //商品信息数据
      this.goods = new Goods(resData.itemInfo, resData.columns, resData.shopInfo.services)
      //商家信息数据
      this.shop = new Shop(resData.shopInfo)
      //商品详情
      this.detailInfo = resData.detailInfo
      //商品参数
      this.paramInfo = new GoodsParam(resData.itemParams.info, resData.itemParams.rule)
      //获取评论信息
      this.commentInfo = resData.rate.list[0]
    })
    //获取推荐数据
    getRecommend().then(res => {
      this.recommend = res.data.data.list
    })
  },
  mounted() {},
  methods: {
    ...mapActions(['addCart']),
    //图片加载完，将每个板块的距离顶部的距离添加在一个数组里
    imgLoad() {
      this.$refs.BScroll.refresh()
      this.topY.push(0)
      this.topY.push(this.$refs.param.$el.offsetTop)
      this.topY.push(this.$refs.comment.$el.offsetTop)
      this.topY.push(this.$refs.rem.$el.offsetTop)
      this.topY.push(Number.MAX_VALUE)
    },
    //点击对应的板块到达对应的位置
    goHere(index) {
      this.$refs.BScroll.backTop(0, -this.topY[index],500)
    },
    //滚动BScroll对应的版块变换样式
    scroll(options) {
      let Y = -this.$refs.BScroll.getScrollY()
      for(let i = 0; i < this.topY.length-1; i++){
        if(this.curr !== i  && Y >= this.topY[i] && Y < this.topY[i+1]){
          this.curr = i
          this.$refs.denav.flag = i
        }
      }
      //改变返回顶部按钮的显隐
      this.isBackTopShow = Y > 1000
    },
    //返回顶部
    backTop() {
      this.$refs.BScroll.backTop(0, 0, 500)
    },
    //加入购物车
    addCartProduct() {
      const product = {}
      product.iid = this.iid
      product.img = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      //调用vuex里的addCart方法
      this.addCart(product).then(res => {
        //跳出弹窗
        this.$toast.show(res, 1500)
      })
    }
  }
}
</script>

<style  scoped>
.detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail_nav_bar {
  background-color: #fff;
  position: relative;
  z-index: 9;
}
.center {
  height: calc(100% - 44px - 49px);
}
</style>
