import { currentWeatherInterface } from "../../utils/types/currentWeather/currentWeatherInterface";

export interface WeatherSearchedInterface {
  cityName: string,
  // data: currentWeatherInterface,
  data: any,
  isLoading: boolean,
  showResult: boolean,
}