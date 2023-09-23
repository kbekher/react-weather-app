import { useEffect, useState } from 'react';
import { useWeather } from '../../hooks/useWeather';
import { getForecast } from '../../services/forecast';
import { ForecastDay } from '../../types/ForecastDay';
import { WeekDay } from '../WeekDay';

import './Forecast.scss';

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

export const Forecast: React.FC = () => {
  const { weatherData } = useWeather();
  const { latitude, longitude } = weatherData;
  const [forecastData, setForecastData] = useState<ForecastDay[]>([]);

  useEffect(() => {
    getForecast(latitude, longitude)
      .then(response => {
        setForecastData(response.daily);
      })
  }, [latitude, longitude]);

  return (
    <div className="Forecast">
      <div className="Forecast__container">
        {forecastData.map((dailyForecast, index) => {
          if (index >= FIRST_WEEK_DAY && index < LAST_WEEK_DAY) {
            return (
              <div className="Forecast__weekday" key={index}>
                <WeekDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};