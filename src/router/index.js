import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/TestGuide.vue'

const routes = [
  {
    path: '/',
    name: 'TestGuide',
    component: Home
  },
  {
    path: '/pagelist',
    name: 'PageList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PageList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router