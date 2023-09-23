import React from 'react';
import { useWeather } from '../../hooks/useWeather';
import { FormattedDate } from '../FormattedDate';
import { PropertyBox } from '../PropertyBox';
import { TemperatureSection } from '../TemperatureSection';

import './TodayWeather.scss';

export const TodayWeather: React.FC= () => {
  const { weatherData } = useWeather();

  const {
    city,
    icon,
    wind,
    humidity,
    pressure
  } = weatherData;

  const backgroundImage = require(`../../../public/images/${icon}.png`);

  return (
    <div className="TodayWeather">
      <div className="TodayWeather__main-info">
        <div className="TodayWeather__text-section">
          <div>
            <h1 className="TodayWeather__city">{city}</h1>
            <div className="TodayWeather__current-date">
              <FormattedDate />
            </div>
          </div>
          <TemperatureSection />
        </div>
        <div 
          className="TodayWeather__img"
          style={{backgroundImage: `url(${backgroundImage})`}}
        >
          {' '}
        </div>
      </div>
      <div className="TodayWeather__properties">
        <PropertyBox
          name="Wind"
          value={wind}
          unit="m/h"
        />
        <PropertyBox
          name="Humidity"
          value={humidity}
          unit="%"
        />
        <PropertyBox
          name="Pressure"
          value={pressure}
          unit="hPa"
        />
      </div>
    </div>
  );
};