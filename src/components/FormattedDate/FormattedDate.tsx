import { useWeather } from '../../hooks/useWeather';

export const FormattedDate: React.FC= () => {
  const { weatherData } = useWeather();
  const { date } = weatherData;

  let hours = date.getHours();

  let minutes = date.getMinutes();

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

  return (
    <div className="FormattedDate">
       {day} {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}
    </div>
  );
};