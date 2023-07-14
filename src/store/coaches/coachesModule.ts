import { User } from '@/models/user'
import { ActionContext, Module } from 'vuex'
import { getUser, getCoaches, connectWithCoach } from '@/shared/api/api'
import { EMPTY_USER } from '@/shared/constants'
import { CoachesState } from '@/store/coaches/types'
import { StoreState } from '@/store/types'
import { calculateAge } from '@/shared/helpers/age'
export const coachesModule: Module<CoachesState, StoreState> = {
  namespaced: true,
  state: {
    coaches: [],
    coachProfile: EMPTY_USER
  },
  mutations: {
    getCoaches (state: CoachesState, payload: User[]) {
      state.coaches = payload
    },
    setCoach (state: CoachesState, payload: User) {
      state.coachProfile = payload
    }
  },
  actions: {
    async getCoaches ({ commit }) {
      commit('getCoaches', await getCoaches())
    },
    async getCoach (context: ActionContext<CoachesState, StoreState>, id: string) {
      context.commit('setCoach', await getUser(id))
    },
    async connectWithCoach (context: ActionContext<CoachesState, StoreState>, id: string) {
      await connectWithCoach(id)
    }
  },
  getters: {
    age: state => calculateAge((state.coachProfile as User).birthDay)
  }
}
