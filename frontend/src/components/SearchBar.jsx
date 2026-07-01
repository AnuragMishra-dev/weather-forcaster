import React, { useState } from "react";
import axios from "axios";
import { getTemperature, weatherImages } from "./getTemperature.js";
import "./SearchBar.css";

export default function SearchBar() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const PlaceData = await axios.get(
        `http://localhost:5000/search/${city}/${country}`,
      );

      console.log(PlaceData.data);
      setError("");
      setData(PlaceData.data);

      setCity("");
      setCountry("");
    } catch (error) {
      setError("city not found!");
      setData({});
    }
  };

  const condition =
    data.temperature !== undefined ? getTemperature(data.temperature) : null;

  return (
    <div className="search-container">
      <div className="search-form">
        <input
          className="search-input"
          type="text"
          value={city}
          placeholder="Enter city name"
          onChange={(e) => setCity(e.target.value)}
        />

        <input
          className="search-input"
          type="text"
          value={country}
          placeholder="Enter country name"
          onChange={(e) => setCountry(e.target.value)}
        />

        <button className="search-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>

   {data.city && (  <div className="weather-card">
        
        <h2>City: {data.city}</h2>

        {condition && (
          <img
            className="weather-image"
            src={weatherImages[condition]}
            alt={condition}
          />
        )}

        <h2>Temperature: {data.temperature}°C</h2>
        <h2>Humidity: {data.humidity}%</h2>
        <h2>Weather: {data.weather}</h2>
        <h2>Wind: {data.wind} km/h</h2>
        <h2>Condition: {condition}</h2>
        </div>
       ) }

        {error && <p className="error-message">{error}</p>}
      </div>
  
  );
}
