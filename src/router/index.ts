import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Top from '../views/Top.vue'
import Menu from '../views/Menu.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
