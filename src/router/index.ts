import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/Projects.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/Blog.vue')
    }
  ]
})

export default router