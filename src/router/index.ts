import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import CoachesView from '@/views/CoachesView.vue'
import CoachView from '@/views/CoachView.vue'
import ProfileView from '@/views/ProfileView.vue'
import RequestsView from '@/views/RequestsView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/coaches',
    component: CoachesView
  },
  {
    path: '/coach-details/:id',
    component: CoachView
  },
  {
    path: '/profile',
    component: ProfileView
  },
  {
    path: '/requests',
    component: RequestsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
