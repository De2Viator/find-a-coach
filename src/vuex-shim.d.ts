import { Store } from 'vuex'
import { CoachesState } from '@/store/coaches/coachesModule'

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface ComponentCustomProperties {
    $store: Store<CoachesState>
  }
}
