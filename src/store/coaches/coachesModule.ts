import { Coach } from '@/models/coach'
import { ActionContext, Module, Store, StoreOptions } from 'vuex'
import { getCoaches } from '@/shared/api/api'

export interface CoachesState {
  coaches: Coach[];
}

export const coachesModule: Module<CoachesState, StoreOptions<Store<CoachesState>>> = {
  namespaced: true,
  state: {
    coaches: []
  },
  mutations: {
    getCoaches (state: CoachesState, payload: Coach[]) {
      state.coaches = payload
    }
  },
  actions: {
    async getCoaches (context: ActionContext<CoachesState, StoreOptions<Store<CoachesState>>>) {
      context.commit('getCoaches', await getCoaches())
    }
  }
}
