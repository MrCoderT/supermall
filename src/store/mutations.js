export default {
  //增加购物车里商品的数量
  addCount(state, product) {
    product.count++ 
  },
  //添加商品到购物车
  addToCart(state, product) {
    product.count = 1
    product.checked = true
    state.cartProduct.push(product) 
  }
}