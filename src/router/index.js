import { createRouter, createWebHistory } from 'vue-router'
import MainContent from '@/components/MainContent'
import TestContent from '@/components/TestContent'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainContent
  },
  {
    path: '/test',
    name: 'test',
    component: TestContent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
