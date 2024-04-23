import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import('@/views/AboutUsView.vue')
    },
    {
      path: '/about-you',
      name: 'about-you',
      component: () => import('@/views/AboutYouView.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('@/views/Portfolio.vue')
    }
  ]
})

export default router
