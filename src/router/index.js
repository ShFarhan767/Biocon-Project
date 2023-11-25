import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/business-segment',
      name: 'business segment',
      component: () => import('../views/BusinessSegmentView.vue')
    },
    {
      path: '/corporate',
      name: 'corporate',
      component: () => import('../views/CorporateView.vue')
    },
    {
      path: '/career',
      name: 'career',
      component: () => import('../views/CareerView.vue')
    },
  ]
})

export default router
