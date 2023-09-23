import { useWeather } from '../../hooks/useWeather';
import { WEEKDAYS } from '../../utils/dateConstants';

export const FormattedDate: React.FC = () => {
  const { weatherData } = useWeather();
  const { date } = weatherData;

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const day = WEEKDAYS[date.getDay()];

  const maxValue = 10;

  return (
    <div className="FormattedDate">
      {day} {hours < maxValue
        ? `0${hours}`
        : hours
      }:{minutes < maxValue
        ? `0${minutes}`
        : minutes
      }
    </div>
  );
};