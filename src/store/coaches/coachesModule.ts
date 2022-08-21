import { Coach } from '@/models/coach'
import { ActionContext, Store, StoreOptions } from 'vuex'
import { firebaseGetCoaches } from '../firebase'

export interface CoachesState {
  coaches: Coach[];
}

export const coachesModule = {
  namespace: true,
  state: {
    coaches: []
  },
  mutations: {
    getCoaches (state: CoachesState, payload:{[key:string]:Coach[]}) {
      for (const key in payload) {
        state.coaches = [...payload[key]]
      }
    }
  },
  actions: {
    async getCoaches (context: ActionContext<CoachesState, StoreOptions<Store<CoachesState>>>) {
      const coaches = await firebaseGetCoaches() as { [key:string]:Coach[]}
      context.commit('getCoaches', coaches)
    }
  }
}
