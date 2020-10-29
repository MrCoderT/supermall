import Toast from './Toast.vue'

const obj = {}

obj.install = (Vue) => {
  //创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  //new的方式，根据组件构造器创建一个对应的组件对象
  const toast = new toastContrustor()
  //将该组件对象挂载到某一个dom元素上
  toast.$mount(document.createElement('div'))
  //toast.$el就是该div
  document.body.appendChild(toast.$el)
  //将该组件对象放到Vue的原型上，这样就可以在任何地方直接使用了
  Vue.prototype.$toast = toast
}

export default obj