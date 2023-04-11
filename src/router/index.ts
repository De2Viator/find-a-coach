import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import TheLayout from '@/components/layout/TheLayout.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '', component: TheLayout }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
