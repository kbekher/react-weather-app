import React from 'react';
import { WeatherContextType } from '../types/WeatherContextType';
import { WeatherContext } from '../store/WeatherContext';

export const useWeather = (): WeatherContextType => React.useContext(WeatherContext);