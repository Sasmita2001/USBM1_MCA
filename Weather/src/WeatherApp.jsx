/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "YOUR_API_KEY_HERE"; 
  const URL = `https://api.openweathermap.org/data/2.5/weather`;

  const fetchWeather = () => {
    if (!city) {
      return;
    }

    setLoading(true);
    setError(null);
    setWeather(null);

    axios
      .get(URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
        },
      })
      .then((response) => {
        setWeather(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch weather. Please try again.");
        setLoading(false);
      });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-4">Weather App</h1>
      
      <div className="mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      
      <button
        onClick={fetchWeather}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Get Weather
      </button>

      {loading && (
        <div className="text-center text-blue-500 mt-4">Loading...</div>
      )}

      {error && (
        <div className="text-center text-red-500 mt-4">{error}</div>
      )}

      {weather && !loading && !error && (
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">{weather.name}</h2>
          <p className="text-lg">{weather.weather[0].description}</p>
          <p className="text-lg">Temperature: {weather.main.temp}°C</p>
          <p className="text-lg">Humidity: {weather.main.humidity}%</p>
          <p className="text-lg">Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
