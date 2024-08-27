export interface CovidData {
    dates: string[];
    cases: number[];
    countries: CountryData[];
  }
  
  export interface CountryData {
    country: string;
    lat: number;
    long: number;
    active: number;
    recovered: number;
    deaths: number;
  }
  