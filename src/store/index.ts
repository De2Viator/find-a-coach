import { createStore } from 'vuex'
import { coachesModule } from './coaches/coachesModule'
import { geoModule } from '@/store/geo/geoModule'
import { StoreState } from '@/store/types'
import { authModule } from '@/store/auth/authModule'
import { requestsModule } from '@/store/requests/requestsModule'
export default createStore<StoreState>({
  modules: {
    coachesModule,
    geoModule,
    authModule,
    requestsModule
  }
})
