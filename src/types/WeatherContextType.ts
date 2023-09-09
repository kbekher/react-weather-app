import { Weather } from "./Weather";

export type WeatherContextType = {
  weatherData: Weather,
  setWeatherData: (v: Weather) => void,
  isLoading: boolean,
  setIsLoading: (v: boolean) => void,
  errorMessage: string,
  setErrorMessage: (v: string) => void,
};