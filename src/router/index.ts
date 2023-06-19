import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import CoachesView from '@/views/CoachesView.vue'
import CoachView from '@/views/CoachView.vue'
import ProfileView from '@/views/ProfileView.vue'
import RequestsView from '@/views/RequestsView.vue'
import RegistrationView from '@/views/RegistrationView.vue'
import AuthView from '@/views/AuthView.vue'
import TheLayout from '@/components/layout/TheLayout.vue'
import { TOKEN } from '@/shared/constants'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: TheLayout,
    children: [
      {
        path: 'coaches',
        component: CoachesView
      },
      {
        path: 'coach-details/:id',
        component: CoachView
      },
      {
        path: 'profile',
        component: ProfileView
      },
      {
        path: 'requests',
        component: RequestsView
      }
    ]
  },
  {
    path: '/auth',
    component: AuthView
  },
  {
    path: '/registration',
    component: RegistrationView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from) => {
  return !!from.path
})
router.beforeEach((to, from, next) => {
  if (!localStorage.getItem(TOKEN) && to.path === ('/registration' || '/auth')) next()
  else if (localStorage.getItem(TOKEN) && to.path !== '/registration') next()
})

export default router
