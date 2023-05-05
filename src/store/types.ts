import { CoachesState } from '@/store/coaches/types'
import { Store, StoreOptions } from 'vuex'
import { GeoState } from '@/store/geo/types'

export interface RootState {
  coachesModule:CoachesState,
  geoModule:GeoState
}

export type StoreState = StoreOptions<Store<RootState>>
