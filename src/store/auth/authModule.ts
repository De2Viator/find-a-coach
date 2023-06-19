import { StoreState } from '@/store/types'
import { ActionContext, Module } from 'vuex'
import { Auth, AuthState } from '@/store/auth/types'
import { authUser, registerUser } from '@/shared/api/api'
import { User } from '@/models/coach'
import { TOKEN } from '@/shared/constants'

export const authModule: Module<AuthState, StoreState> = {
  namespaced: true,
  state: {
    sessionToken: localStorage.getItem(TOKEN) || ''
  },
  mutations: {
    setUser (state: AuthState, payload) {
      state.sessionToken = payload.user.accessToken
      localStorage.setItem(TOKEN, state.sessionToken)
    }
  },
  actions: {
    async auth (context: ActionContext<AuthState, StoreState>, auth: Auth) {
      context.commit('setUser', await authUser(auth.email, auth.password))
    },
    async registration (context: ActionContext<AuthState, StoreState>, user: User) {
      context.commit('setUser', await registerUser(user))
    }
  }
}
