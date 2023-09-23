import { useWeather } from '../../hooks/useWeather';

export const FormattedDate: React.FC = () => {

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const { weatherData } = useWeather();
  const { date } = weatherData;

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const day = days[date.getDay()];

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