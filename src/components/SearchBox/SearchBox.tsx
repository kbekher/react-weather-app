import React, { useState } from 'react';
import { useWeather } from '../../hooks/useWeather';
import { getCityWeather, setWeather } from '../../services/weather';

import './SearchBox.scss';

export const SearchBox: React.FC = () => {
  const {
    setWeatherData,
    setIsLoading,
    setErrorMessage,
  } = useWeather();

  const [city, setCity] = useState('');

  const updateCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!city.trim()) {
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    getCityWeather(city)
      .then(response => {
        setWeather(response, setWeatherData);
      })
      .catch(() => setErrorMessage('Oops! Seems like we could not load any data. Try again!'))
      .finally(() => setIsLoading(false));

    setCity('');
  }
  return (
    <div className="SearchBox">
      <form
        autoComplete="off"
        className="align-items-center"
        onSubmit={handleSubmit}
      >
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