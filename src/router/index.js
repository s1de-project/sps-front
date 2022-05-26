import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/PageList.vue'

const routes = [
  {
    path: '/',
    name: 'pagelist',
    component: Home
  },
  {
    path: '/TestGuide',
    name: 'TestGuide',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TestGuide.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router