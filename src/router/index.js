import Vue from 'vue'
import store from '@/store'
import VueRouter from 'vue-router'
import DefaultLayout from '@/layouts/default.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: () =>
      import(/* webpackChunkName: "welcome" */ '@pages/welcome/index.vue'),
  },
  {
    path: '/:tenantId/demo',
    name: 'Demo',
    meta: {
      layout: DefaultLayout,
    },
    component: () =>
      import(/* webpackChunkName: "demo" */ '@pages/demo/index.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.layout) {
    store.dispatch('updateLayout', to.meta.layout)
  }
  next()
})

export default router
