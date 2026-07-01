import React from "react";

export default function WeatherCard({weather}) {
  return (
    <div>
        <h2>City name: {weather.city}</h2>

        <p>
            temperature: {weather.temperature}
        </p>




      <div></div>
    </div>
  );
}
