// vuex.d.ts
import { Store } from 'vuex'
import { CoachesState } from '@/store/coaches/coachesModule'

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    coachesModule:CoachesState
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
