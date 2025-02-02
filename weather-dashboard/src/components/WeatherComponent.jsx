import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import LoadingSpinner from "./LoadingSpinner";
import styles from "../styles/weatherComponent.module.css"; // Import styles

const WeatherComponent = () => {
  const { weatherData, error } = useContext(WeatherContext);

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!weatherData) {
    return <LoadingSpinner />;
  }

  return (
    <div className={styles.weatherInfo}>
      <h2>{weatherData.name}, {weatherData.sys.country}</h2>
      <div className={styles.weatherDetails}>
        <div className={styles.weatherCondition}>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt={weatherData.weather[0].description}
          />
          <p>{weatherData.weather[0].description}</p>
        </div>
        <div className={styles.temp}>
          <h3>{weatherData.main.temp}°C</h3>
        </div>
        <div className={styles.otherDetails}>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherComponent;
