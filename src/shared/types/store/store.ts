import { Store } from 'vuex'
import { CoachesState } from '@/store/coaches/coachesModule'

export interface StoreState {
  $store: Store<CoachesState>
}
