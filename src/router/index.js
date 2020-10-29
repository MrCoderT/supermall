import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('../views/home/Home.vue'),
    },
    {
      path: '/classify',
      component: () => import('../views/classify/Classify.vue')
    },
    {
      path: '/cart',
      component: () => import('../views/cart/Cart.vue')
    },
    {
      path: '/prefile',
      component: () => import('../views/prefile/Prefile.vue')
    },
    {
      path: '/detail',
      component: () => import('../views/detail/Detail.vue')
    }
  ],
  mode: 'history'
})

export default router