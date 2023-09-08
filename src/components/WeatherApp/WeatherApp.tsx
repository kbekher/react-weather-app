import { useEffect, useState } from 'react';
import { getCityWeather } from '../../services/weather';
import { Weather } from '../../types/Weather';
import { Loader } from '../Loader';
import { SearchBox } from '../SearchBox/';
import { Footer } from '../Footer';
import { TodayWeather } from '../TodayWeather';
import { Forecast } from '../Forecast';

import './WeatherApp.scss';

export const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState<Weather | null>();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setIsLoading(true);
    setErrorMessage('');

    getCityWeather('Kyiv')
      .then(response => {
        setWeatherData({
          city: response.city,
          latitude: response.coordinates.latitude,
          longitude: response.coordinates.longitude,
          date: new Date(response.time * 1000),
          temperature: response.temperature.current,
          description: response.condition.description,
          icon: `./images/${response.condition.icon}.png`,
          wind: response.wind.speed,
          humidity: response.temperature.humidity,
          pressure: response.temperature.pressure,
        });
      })
      .catch(() => setErrorMessage('Oops! Seems like we could not load any data. Try again later!'))
      .finally(() => {
        setIsLoading(false);
        setErrorMessage('');
      });
  }, []);

  return (
    <div className="WeatherApp">
      <div className="WeatherApp__container">

        {errorMessage && (
          <h1 className="WeatherApp__error-message">
            {errorMessage}
          </h1>
        )}

        {weatherData && !isLoading ? (
          <div className="Weather">
            <div className="Weather__container">
              <SearchBox
                setWeatherData={setWeatherData}
                setErrorMessage={setErrorMessage}
              />

              <TodayWeather data={weatherData} />
            </div>

            <Forecast
              longitude={weatherData.longitude}
              latitude={weatherData.latitude}
            />

            <Footer />
          </div>
        ) : <Loader />}
      </div>
    </div>
  );
};