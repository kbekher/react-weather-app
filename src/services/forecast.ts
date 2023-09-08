import { getData } from "../utils/httpClient";

export function getForecast(latitude: number, longitude: number) {
  return getData(`forecast?lat=${latitude}&lon=${longitude}`);
};