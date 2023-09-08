import { getData } from "../utils/httpClient";

export function getCityWeather(city: string) {
  return getData(`current?query=${city}`);
};