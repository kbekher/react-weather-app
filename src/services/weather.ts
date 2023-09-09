import { Weather } from "../types/Weather";
import { getData } from "../utils/httpClient";

export function getCityWeather(city: string) {
  return getData(`current?query=${city}`);
};

export function setWeather(
  data: any,
  callback: (v: Weather) => void,
) {
  return callback({
    city: data.city,
    latitude: data.coordinates.latitude,
    longitude: data.coordinates.longitude,
    date: new Date(data.time * 1000),
    temperature: data.temperature.current,
    description: data.condition.description,
    icon: `./images/${data.condition.icon}.png`,
    wind: data.wind.speed,
    humidity: data.temperature.humidity,
    pressure: data.temperature.pressure,
  });
}