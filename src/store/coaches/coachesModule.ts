import { ActionContext, Store, StoreOptions } from 'vuex'
import { getCoaches } from '../firebase'

export interface Coach {
  name: string;
  id: number;
  description: string;
  subject: string;
}

export interface CoachesState {
  coaches: Coach[];
}

export const coachesModule = {
  namespace: true,
  state: {
    coaches: []
  },
  mutations: {
    getCoaches (state: CoachesState) {
      return state.coaches
    }
  },
  actions: {
    getCoaches (
      context: ActionContext<CoachesState, StoreOptions<Store<CoachesState>>>
    ) {
      getCoaches()
      context.commit('getCoaches')
    }
  }
}
