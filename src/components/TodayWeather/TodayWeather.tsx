import { Weather } from '../../types/Weather';
import { FormattedDate } from '../FormattedDate';
import { PropertyBox } from '../PropertyBox';
import { TemperatureSection } from '../TemperatureSection';

import './TodayWeather.scss';

type Props = {
  data: Weather;
}

export const TodayWeather: React.FC<Props> = ({ data }) => {
  const {
    city,
    date,
    temperature,
    description,
    icon,
    wind,
    humidity,
    pressure
  } = data;

  return (
    <div className="TodayWeather">
      <div className="TodayWeather__main-info">
        <div className="TodayWeather__text-section">
          <div>
            <h1 className="TodayWeather__city">{city}</h1>
            <div className="TodayWeather__current-date">
              <FormattedDate date={date} />
            </div>
          </div>
          <TemperatureSection
            celsius={temperature}
            description={description}
          />
        </div>
        <div className="TodayWeather__image-section">
          <img 
            src={icon} 
            alt="weather icon"
            className="TodayWeather__image"
          ></img>
        </div>
      </div>
      <div className="TodayWeather__properties">
        <PropertyBox
          name="Wind"
          value={wind}
          unit="m/h"
          img="./images/Wind.svg"
          alt="wind icon"
        />
        <PropertyBox
          name="Humidity"
          value={humidity}
          unit="%"
          img="./images/Humidity.svg"
          alt="humidity icon"
        />
        <PropertyBox
          name="Pressure"
          value={pressure}
          unit="hPa"
          img="./images/Pressure.svg"
          alt="pressure icon"
        />
      </div>
    </div>
  );
};