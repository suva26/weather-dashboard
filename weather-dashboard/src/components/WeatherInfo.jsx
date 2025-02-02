import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const WeatherInfo = () => {
  const { weatherData, error } = useContext(WeatherContext);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!weatherData) {
    return <div className="info">Search for a city to get the weather information.</div>;
  }

  return (
    <div className="weather-info">
      <h2>{weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
      <p>Condition: {weatherData.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
        alt="Weather Icon"
      />
    </div>
  );
};

export default WeatherInfo;
