export interface RequestProps {
  location: string;
}

export interface FetchResult {
  title: string;
  location_type: string;
  woeid: number; //Where On Earth ID
  latt_long: string;
  distance?: number; //metres - only on lattlong request
}

export interface ClimateDetails {
  title: string;
  localization_type: string;
  latt_log: string;
  time: string;
  sun: string;
  timezone_name: string;
  parent: object;
  consolidated_weather: WeatherResponseFormat[];
  sources: Array<{
    title: string;
    url: string;
  }>;
}

export interface WeatherResponseFormat {
  id: number;
  created: string;
  applicable_date: string;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_speed: number;
  wind_direction: number;
  wind_direction_compass: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}

export interface ImageType {
  format: "svg" | "ico" | "bigPng" | "smallPng";
}
