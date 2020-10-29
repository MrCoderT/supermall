<!-- 商品数据 -->
<template>
  <div class="goods_list">
    <div v-for="(item, index) in goodsList" :key="index" @click="goGoodsDetail(item.iid)">
      <img v-lazy=" item.image || item.show.img" :alt="item.title" @load="imgLoad">
        <p>{{item.title}}</p>
        <span class="price">{{item.orgPrice || `￥${ item.discountPrice}`}}</span>
        <span class="sc">{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    goodsList: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('itemImgLoad')
    },
    goGoodsDetail(iid) {
      this.$router.push({
        path: '/detail',
        query: {
          iid
        }
      })
    }
  }
}
</script>

<style  scoped>
.goods_list{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.goods_list div{
  text-align: center;
  flex: 1;
  width: 50%;
  box-sizing: border-box;
  padding: 0 2%;
}
.goods_list div img{
  width: 100%;
  display: block;
  border-radius: 5px;
}
.goods_list div p{
  white-space: nowrap;
  text-overflow:ellipsis;
  overflow: hidden;
  margin: 5px 0;
}
.price{
  color:var(--color-high-text);
}
.sc::before{
  content: '';display: inline-block;
  margin-left: 5px;
  position: relative;
  top: 1px;
  width: 14px;
  height: 14px;
  background: url("~@/assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
