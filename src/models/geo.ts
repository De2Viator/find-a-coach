export class Country {
  // eslint-disable-next-line no-useless-constructor
  constructor (public name: string, public flag: string) {}
}

export interface CountryResponse {
  name: {
    common: string
  },
  flags: {
    png: string
  }
}
