export default {
  //添加商品到购物车
  addCart({state, commit}, product) {
    return new Promise((response, reject) => {
      let flag = null
      for(let item of state.cartProduct){
        if(item.iid === product.iid){
          //遍历购物车里的所有商品，如果已经存在该商品了，就赋值给flag
          flag = item
        }
      }
      if(flag) {
        //如果flag有值就调用mutations里的添加数量的方法
        commit('addCount', flag)
        response('又添加了一件')
      }else {
        //如果flag没有值就调用mutations里的添加购物车的方法
        product.count = 1
        commit('addToCart', product)
        response('添加成功')
      }
    })
  }
}