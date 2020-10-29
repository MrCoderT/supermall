<!-- 购物车底部导航 -->
<template>
  <div class="bottom_bar">
    <div class="left" @click="checkAll">
      <cart-button class="check_all" :class="{select_all:isSelectAll}" />
      <span>全选</span>
    </div>
    <div class="center">
      合计：{{totalPrice}}
    </div>
    <div class="right" @click="calcCheck">
     去计算({{checkedCount}})
    </div>    
  </div>
</template>

<script>
import CartButton from './CarButton'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  components: {
    CartButton
  },
  computed: {
    //获取vuex的getters
    ...mapGetters(['cartProduct']),
    //动态改变合计的值
    totalPrice() {
      return this.cartProduct.filter(item => {
        return item.checked
      }).reduce((prev, next) => {
        return prev + next.price * next.count
      },0).toFixed(2)
    },
    //动态改变去计算的值
    checkedCount() {
      return this.cartProduct.filter(item => {
        return item.checked
      }).length
    },
    //控制全选/不全选，动态添加/去除class
    isSelectAll() {
      if(this.cartProduct.length == 0) return false
      return !this.cartProduct.find(item => !item.checked)
    }
  },
  methods: {
    checkAll() {
      if(this.isSelectAll) {
        this.cartProduct.forEach(item => item.checked = false)
      }else {
        this.cartProduct.forEach(item => item.checked = true)
      }
    },
    calcCheck() {
      const isAllFalse = this.cartProduct.filter(item => item.checked)
      if(!isAllFalse.length){
        this.$toast.show('请至少选择一件商品', 1500)
      }else {
        this.$toast.show('即将跳转到支付页面', 1500)
      }
    }
  }
}
</script>

<style  scoped>
.bottom_bar {
  display: flex;
  height: 40px;
  background-color: #f1f2f6;
}
.left {
  flex: .7;
  display: flex;
  box-sizing: border-box;
  padding-top: 10px;
}
.check_all {
  width: 20px;
  height: 20px;
  margin: 0 5px 0 10px;
}
.select_all {
  background-color: pink;
  border: 2px solid pink;
}
.left span {
  margin-top: 2px;
}
.center,.right {
  flex: 1;
  padding-top: 12px;
}
.right {
  background-color: red;
  color: #fff;
  text-align: center;
}
</style>
