import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/about',
    component: () => import('@/views/About')
  },
  {
    path: '/articles',
    component: () => import('@/views/Articles')
  },
  {
    path: '/collections',
    component: () => import('@/views/Collections')
  },
  {
    path: '/home',
    component: () => import('@/views/Home')
  },
  {
    path: '/life',
    component: () => import('@/views/Life')
  },
  {
    path: '/message',
    component: () => import('@/views/Message')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/components/NotFound')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: '/blog/',
  routes
})

export default router
