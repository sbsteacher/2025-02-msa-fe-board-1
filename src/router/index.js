import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/write',
      component: () => import('../views/WriteMod.vue'),
    },
  ],
})

export default router
