import { createStore } from 'vuex'
import { coachesModule } from './coaches/coachesModule'
import { geoModule } from '@/store/geo/geoModule'
import { StoreState } from '@/store/types'
export default createStore<StoreState>({
  modules: {
    coachesModule,
    geoModule
  }
})
