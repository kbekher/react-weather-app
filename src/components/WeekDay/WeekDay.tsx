import { ForecastDay } from '../../types/ForecastDay';

import './WeekDay.scss';

type Props = {
  data: ForecastDay;
};

const MILLIS = 1000;

export const WeekDay: React.FC<Props> = ({ data }) => {
  const {
    condition,
    temperature,
    time,
  } = data;

  let tempValue = Math.round(temperature.day);

  function formatDay(timestamp: number) {
    const date = new Date(timestamp * MILLIS);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = days[date.getDay()];
    return day;
  }

  function formatDate(timestamp: number) {
    const date = new Date(timestamp * MILLIS);
    const day = date.getDate();
    const months = [
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
    const month = months[date.getMonth()];
    return `${day}/${month}`;
  }

  return (
    <div className="WeekDay">
    <div>
      <span className="WeekDay__day">{formatDay(time)}</span>{" "}
      <span className="WeekDay__date">{formatDate(time)}</span>
      <div className="WeekDay__temperature">{tempValue}° C</div>
    </div>
    <div className={`WeekDay__img WeekDay__img--${condition.icon}`}>
      {' '}
    </div>
  </div>
  );
};