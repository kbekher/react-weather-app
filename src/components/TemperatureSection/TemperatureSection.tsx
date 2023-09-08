import { useState } from 'react';
import cn from 'classnames';

import './TemperatureSection.scss';

type Props = {
  celsius: number;
  description: string;
};

export const TemperatureSection: React.FC<Props> = ({
  celsius,
  description,
}) => {
  const [unit, setUnit] = useState('celsius');

  function showFahrenheit(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setUnit('imperial');
  }

  function showCelsius(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setUnit('celsius');
  }

  function fahrenheit() {
    return (celsius * 9) / 5 + 32;
  }

  return (
    <div className="TemperatureSection">
      <div className="TemperatureSection__temperature">{
        unit === 'celsius' ? Math.round(celsius) : Math.round(fahrenheit())
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