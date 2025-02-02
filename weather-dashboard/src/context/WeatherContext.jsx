import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f43525141bc6fbaea005a65c9cbefc80&units=metric`
      );
      setWeatherData(response.data);
      setError(null);
      localStorage.setItem('city', city);
    } catch (error) {
      setError('Failed to fetch weather data. Please try again.');
      setWeatherData(null);
    }
  };

  useEffect(() => {
    const lastCity = localStorage.getItem('city');
    if (lastCity) {
      fetchWeatherData(lastCity);
    }
  }, []);

  return (
    <WeatherContext.Provider value={{ weatherData, error, fetchWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };
