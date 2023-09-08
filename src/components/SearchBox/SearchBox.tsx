import React, { useState } from 'react';
import { getCityWeather } from '../../services/weather';
import { Weather } from '../../types/Weather';

import './SearchBox.scss';

type Props = {
  setWeatherData: (value: Weather) => void;
  setErrorMessage: (value: string) => void;
};

export const SearchBox: React.FC<Props> = ({
  setWeatherData,
  setErrorMessage,
}) => {
  const [city, setCity] = useState('');

  const updateCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrorMessage('');

    getCityWeather(city)
      .then(response => {
        setWeatherData({
          city: response.city,
          latitude: response.coordinates.latitude,
          longitude: response.coordinates.longitude,
          date: new Date(response.time * 1000),
          temperature: response.temperature.current,
          description: response.condition.description,
          icon: `/images/${response.condition.icon}.png`,
          wind: response.wind.speed,
          humidity: response.temperature.humidity,
          pressure: response.temperature.pressure,
        });
      })
      .catch(() => setErrorMessage('Oops! Seems like we could not load any data. Try again later!'));

    setCity('');
  }
  return (
    <div className="SearchBox">
      <form
        autoComplete="off"
        className="align-items-center"
        onSubmit={handleSubmit}
      >
        <img
          src="/images/akar-icons_search.svg"
          alt="search-icon"
          className="SearchBox__icon"
        />
        <input
          type="text"
          className="SearchBox__input"
          value={city}
          placeholder="Change the city..."
          onChange={updateCity}
        />
      </form>
    </div>
  );
};