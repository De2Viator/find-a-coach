import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import CoachView from '@/views/CoachView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/coaches',
    component: CoachView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
