
export interface Country {
  country: string;
  countryInfo: {
    iso2: string;
    lat?: number;
    long?: number;
    flag: string;
  };
  cases: number;
  deaths: number;
  recovered: number;
  active: number;
}
