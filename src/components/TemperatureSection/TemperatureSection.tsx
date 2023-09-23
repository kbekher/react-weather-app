import { useState } from 'react';
import cn from 'classnames';
import { useWeather } from '../../hooks/useWeather';

import './TemperatureSection.scss';

enum TemperatureUnit {
  Celsius = 'C',
  Imperial = 'F',
}

export const TemperatureSection: React.FC = () => {
  const { weatherData } = useWeather();
  const { temperature: celsius, description } = weatherData;
  const [unit, setUnit] = useState(TemperatureUnit.Celsius);

  function showFahrenheit(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setUnit(TemperatureUnit.Imperial);
  }

  function showCelsius(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setUnit(TemperatureUnit.Celsius);
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
        unit === TemperatureUnit.Celsius ? Math.round(celsius) : Math.round(celsiusToFahrenheit(celsius))
      }°</div>
      <div className="TemperatureSection__scale-switcher">
        <div className={cn("scale", {
          'scale--turned-off': unit === TemperatureUnit.Imperial,
        })}
        >
          <a href="/" className="scale__link" onClick={showCelsius}>
            {TemperatureUnit.Celsius}
          </a>
        </div>
        <div className={cn("scale", {
          'scale--turned-off': unit === TemperatureUnit.Celsius,
        })}
        >
          <a href="/" className="scale__link" onClick={showFahrenheit}>
            {TemperatureUnit.Imperial}
          </a>
        </div>
      </div>
      <div className="TemperatureSection__description">{description}</div>
    </div>
  );
};