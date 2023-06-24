import { RequestedUser } from '@/components/layout/children/requests/models/types'
import { RequestsState } from '@/store/requests/types'
import { StoreState } from '@/store/types'
import { Module } from 'vuex'
import { getRequestedUsers } from '@/shared/api/api'

export const requestsModule: Module<RequestsState, StoreState> = {
  namespaced: true,
  state: {
    users: []
  },
  mutations: {
    getRequestedUsers (state: RequestsState, payload: RequestedUser[]) {
      state.users = payload
    }
  },
  actions: {
    async getRequestedUsers ({ commit }) {
      commit('getRequestedUsers', await getRequestedUsers())
    }
  }
}
