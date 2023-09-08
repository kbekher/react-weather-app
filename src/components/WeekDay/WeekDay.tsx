import { ForecastDay } from '../../types/ForecastDay';

import './WeekDay.scss';

type Props = {
  data: ForecastDay;
};

export const WeekDay: React.FC<Props> = ({ data }) => {
  const {
    condition,
    temperature,
    time,
  } = data;

  let tempValue = Math.round(temperature.day);
  let icon = `images/f-${condition.icon}.png`;

  function formatDay(timestamp: number) {
    let date = new Date(timestamp * 1000);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    return day;
  }

  function formatDate(timestamp: number) {
    let date = new Date(timestamp * 1000);
    let day = date.getDate();
    let months = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];
    let month = months[date.getMonth()];
    return `${day}/${month}`;
  }

  return (
    <div className="WeekDay">
    <div>
      <span className="WeekDay__day">{formatDay(time)}</span>{" "}
      <span className="WeekDay__date">{formatDate(time)}</span>
      <div className="WeekDay__temperature">{tempValue}° C</div>
    </div>
    <div>
      <img 
        src={icon} 
        alt="weather-icon"
        className="Weather__icon" 
      />
    </div>
  </div>
  )
}