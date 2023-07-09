import { CoachesState } from '@/store/coaches/types'
import { Store, StoreOptions } from 'vuex'
import { GeoState } from '@/store/geo/types'
import { RequestsState } from '@/store/requests/types'
import { AuthState } from '@/store/auth/types'
import { UserState } from '@/store/user/types'

export interface RootState {
  coachesModule:CoachesState,
  geoModule:GeoState,
  requestsModule: RequestsState,
  authModule: AuthState,
  userModule: UserState
}

export type StoreState = StoreOptions<Store<RootState>>
