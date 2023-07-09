import { Module } from 'vuex'
import { getCities, getCountries } from '@/shared/api/api'
import { GeoState } from '@/store/geo/types'
import { StoreState } from '@/store/types'
import { Country } from '@/models/geo'
export const geoModule: Module<GeoState, StoreState> = {
  namespaced: true,
  state: {
    countries: [],
    cities: []
  },
  mutations: {
    setCountries (state: GeoState, payload: Country[]) {
      state.countries = payload
    },
    setCities (state: GeoState, payload: string[]) {
      state.cities = payload
    }
  },
  actions: {
    async getCountries ({ commit }) {
      const countries = await getCountries().then(data => {
        return data.data.map(el => new Country(el.name.common, el.flags.png))
      })
      commit('setCountries', countries)
    },
    async getCities ({ commit }, city: string) {
      let cities:string[] = []
      try {
        const response = await getCities(city)
        cities = response.data.data
      } catch (e) {

      }
      commit('setCities', cities)
    }
  }
}
