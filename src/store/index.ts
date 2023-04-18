import { createStore } from 'vuex'
import { coachesModule } from './coaches/coachesModule'

export default createStore({
  modules: {
    coachesModule
  }
})
