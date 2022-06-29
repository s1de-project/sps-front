import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/LoginUser.vue'

const routes = [
  {
    path: '/',
    name: 'LoginUser',
    component: Home
  },
  {
    path: '/LoginDetail',
    name: 'LoginDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginDetail.vue')
  },
  {
    path: '/StartSlack',
    name: 'StartSlack',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/StartSlack.vue')
  },
  {
    path: '/PageList',
    name: 'PageList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PageList.vue')
  },
  {
    path: '/TestGuide',
    name: 'TestGuide',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TestGuide.vue')
  },
  {
    path: '/ChannelBrowser',
    name: 'ChannelBrowser',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ChannelBrowser.vue')
  },
  {
    path: '/SearchResults',
    name: 'SearchResults',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SearchResults.vue')
  },
  {
    path: '/ChannelMain',
    name: 'ChannelMain',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ChannelMain.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router