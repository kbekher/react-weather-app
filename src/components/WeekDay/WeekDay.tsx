import { ForecastDay } from '../../types/ForecastDay';
import { WEEKDAYS, MONTHS } from '../../utils/dateConstants';

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
    const day = WEEKDAYS[date.getDay()];
    return day;
  }

  function formatDate(timestamp: number) {
    const date = new Date(timestamp * MILLIS);
    const day = date.getDate();

    const month = MONTHS[date.getMonth()];
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