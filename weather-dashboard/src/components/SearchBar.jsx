import React, { useState, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const { fetchWeatherData } = useContext(WeatherContext);

  const handleSearch = () => {
    if (city) {
      fetchWeatherData(city);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
