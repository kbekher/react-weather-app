import React, { useEffect } from 'react';
import { getCityWeather, setWeather } from '../../services/weather';
import { useWeather } from '../../hooks/useWeather';
import { Loader } from '../Loader';
import { SearchBox } from '../SearchBox/';
import { Footer } from '../Footer';
import { TodayWeather } from '../TodayWeather';
import { Forecast } from '../Forecast';

import './WeatherApp.scss';

export const WeatherApp: React.FC = () => {
  const {
    weatherData,
    setWeatherData,
    isLoading,
    setIsLoading,
    errorMessage,
    setErrorMessage,
  } = useWeather();

  useEffect(() => {
    setIsLoading(true);
    setErrorMessage('');

    getCityWeather('Kyiv')
      .then(response => {
        setWeather(response, setWeatherData);
      })
      .catch(() => setErrorMessage('Oops! Seems like we could not load any data. Try again later!'))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="WeatherApp">
      <div className="WeatherApp__container">
        {errorMessage && (
          <h1 className="WeatherApp__error-message">
            {errorMessage}
          </h1>
        )}

        {isLoading && <Loader />}

        {weatherData.city && (
          <div className="Weather">
            <div className="Weather__container">
              <SearchBox />
              <TodayWeather />
            </div>
            <Forecast />
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
};