import Vue from 'vue'
import VueRouter from 'vue-router'
import { HomePage, Page1, Page2 } from '../components'

Vue.use(VueRouter)

export default new VueRouter({
  base: '/canard/',
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 },
    { path: '*', redirect: '/' }
  ]
})
