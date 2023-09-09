import React, { useState } from "react";
import { Weather } from "../types/Weather";
import { WeatherContextType } from "../types/WeatherContextType";

const initialState = {
  city: '',
  latitude: 0,
  longitude: 0,
  date: new Date(),
  temperature: 0,
  description: '',
  icon: '',
  wind: 0,
  humidity: 0,
  pressure: 0,
};

export const WeatherContext = React.createContext<WeatherContextType>({
  weatherData: initialState,
  setWeatherData: (v: Weather) => { },
  isLoading: false,
  setIsLoading: (v: boolean) => { },
  errorMessage: '',
  setErrorMessage: (v: string) => { },
});

type Props = {
  children: React.ReactNode;
}

export const WeatherProvider: React.FC<Props> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<Weather>(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const value = {
    weatherData,
    setWeatherData,
    isLoading,
    setIsLoading,
    errorMessage,
    setErrorMessage,
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
};