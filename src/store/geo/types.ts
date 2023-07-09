import { Country } from '@/models/geo'

export interface GeoState {
  countries: Country[];
  cities: string[],
}
