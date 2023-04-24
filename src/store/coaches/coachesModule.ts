import { Coach } from '@/models/coach'
import { ActionContext, Module, Store, StoreOptions } from 'vuex'
import { getCoach, getCoaches } from '@/shared/api/api'
import { EMPTY_COACH } from '@/shared/constants'

export interface CoachesState {
  coaches: Coach[];
  coachProfile: Coach|null;
}

export const coachesModule: Module<CoachesState, StoreOptions<Store<CoachesState>>> = {
  namespaced: true,
  state: {
    coaches: [],
    coachProfile: EMPTY_COACH
  },
  mutations: {
    getCoaches (state: CoachesState, payload: Coach[]) {
      state.coaches = payload
    },
    setCoach (state: CoachesState, payload: Coach) {
      state.coachProfile = payload
    }
  },
  actions: {
    async getCoaches ({ commit }) {
      commit('getCoaches', await getCoaches())
    },
    async getCoach (context: ActionContext<CoachesState, StoreOptions<Store<CoachesState>>>, id) {
      context.commit('setCoach', await getCoach(id))
    }
  }
}
