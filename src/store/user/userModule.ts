import { ActionContext, Module } from 'vuex'
import { StoreState } from '@/store/types'
import { changeUser, getUser } from '@/shared/api/api'
import { ID } from '@/shared/constants'
import { UserState } from '@/store/user/types'
import { User } from '@/models/user'

export const userModule: Module<UserState, StoreState> = {
  namespaced: true,
  state: {
    user: {} as Omit<User, 'id' | 'studentsCount'>
  },
  mutations: {
    getUser (state: UserState, payload: Omit<User, 'id' | 'studentsCount'>) {
      state.user = payload
    }
  },
  actions: {
    async getUser ({ commit }) {
      commit('getUser', await getUser(localStorage.getItem(ID) as string))
    },
    async updateUser (context: ActionContext<UserState, StoreState>) {
      await changeUser(context.state.user)
    }
  }
}
