import { useState } from 'react';
import cn from 'classnames';
import { useWeather } from '../../hooks/useWeather';

import './TemperatureSection.scss';

export const TemperatureSection: React.FC = () => {
  const { weatherData } = useWeather();
  const { temperature: celsius, description } = weatherData;
  const [unit, setUnit] = useState('celsius');

  function showFahrenheit(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setUnit('imperial');
  }

  function showCelsius(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setUnit('celsius');
  }

  function celsiusToFahrenheit(celsius: number) {
    const ratio = 9 / 5;
    const offset = 32;

    const fahrenheit = (celsius * ratio) + offset;
    return fahrenheit;
  }

  return (
    <div className="TemperatureSection">
      <div className="TemperatureSection__temperature">{
        unit === 'celsius' ? Math.round(celsius) : Math.round(celsiusToFahrenheit(celsius))
      }°</div>
      <div className="TemperatureSection__scale-switcher">
        <div className={cn("scale", {
          'scale--turned-off': unit !== 'celsius',
        })}
        >
          <a href="/" className="scale__link" onClick={showCelsius}>
            C
          </a>
        </div>
        <div className={cn("scale", {
          'scale--turned-off': unit === 'celsius',
        })}
        >
          <a href="/" className="scale__link" onClick={showFahrenheit}>
            F
          </a>
        </div>
      </div>
      <div className="TemperatureSection__description">{description}</div>
    </div>
  );
};