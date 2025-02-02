import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherInfo from './components/WeatherInfo';
import ErrorMessage from './components/ErrorMessage';
import './styles/App.css';
import { WeatherProvider } from './context/WeatherContext';

const App = () => {
  return (
    <WeatherProvider>
      <div className="App">
        <h1>Weather Dashboard</h1>
        <SearchBar />
        <WeatherInfo />
        <ErrorMessage />
      </div>
    </WeatherProvider>
  );
};

export default App;
