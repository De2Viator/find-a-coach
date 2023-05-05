import { Coach } from '@/models/coach'
import { ActionContext, Module } from 'vuex'
import { getCoach, getCoaches } from '@/shared/api/api'
import { EMPTY_COACH } from '@/shared/constants'
import { CoachesState } from '@/store/coaches/types'
import { StoreState } from '@/store/types'
export const coachesModule: Module<CoachesState, StoreState> = {
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
    async getCoach (context: ActionContext<CoachesState, StoreState>, id) {
      context.commit('setCoach', await getCoach(id))
    }
  }
}
