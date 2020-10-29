import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  //用来存放添加到购物车里的商品
  cartProduct: []
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store