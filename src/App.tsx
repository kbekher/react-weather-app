import React from 'react';
import { WeatherApp } from './components/WeatherApp/WeatherApp';
import { WeatherProvider } from './store/WeatherContext';

export const App: React.FC = () => {
  return (
    <WeatherProvider>
      <WeatherApp />
    </WeatherProvider>
  );
};

