import { RequestedUser } from '@/components/layout/children/requests/models/types'
import { RequestsState } from '@/store/requests/types'
import { StoreState } from '@/store/types'
import { Module } from 'vuex'
import { deleteRequestedUser, getRequestedUsers, incrementStudentsCount } from '@/shared/api/api'

export const requestsModule: Module<RequestsState, StoreState> = {
  namespaced: true,
  state: {
    users: []
  },
  mutations: {
    getRequestedUsers (state: RequestsState, payload: RequestedUser[]) {
      state.users = payload
    },
    deleteRequestedUser (state: RequestsState, id: string) {
      state.users = state.users.filter(user => user.id !== id)
    }
  },
  actions: {
    async getRequestedUsers ({ commit }) {
      commit('getRequestedUsers', await getRequestedUsers())
    },
    async deleteRequestedUser ({ commit }, id: string) {
      commit('deleteRequestedUser', await deleteRequestedUser(id))
    },
    async takeStudent ({ commit }, id: string) {
      await incrementStudentsCount()
      await deleteRequestedUser(id)
      commit('deleteRequestedUser', id)
    }
  }
}
