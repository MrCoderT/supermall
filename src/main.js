import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//封装的弹窗插件
import toast from '@/components/common/toast';
//图片懒加载
import VueLazyload from 'vue-lazyload'

//安装toast插件
Vue.use(toast)
//安装图片懒加载插件
Vue.use(VueLazyload, {
  loading: require('./assets/img/common/placeholder.png')
})
//添加事件总线对象
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false
new Vue({
  router,
  store,
  toast,
  render: h => h(App),
}).$mount('#app')
