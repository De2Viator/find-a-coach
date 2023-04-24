import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import CoachesView from '@/views/CoachesView.vue'
import CoachView from '@/views/CoachView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/coaches',
    component: CoachesView
  },
  {
    path: '/coach-details/:id',
    component: CoachView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
