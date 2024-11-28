import { useEffect, useState } from 'react';
import './App.css';

function kelvinToCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}

function Weather({ city }) {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    if (city) {
      fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + process.env.REACT_APP_API_KEY, {})
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setWeatherData(data);
        })
        .catch(error => console.error(error));
    }
  }, [city]);


  return (
    <div className="box">
      {weatherData.weather ? (
        <div class="item item1">
          <h2>Today Forecast</h2>
          <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].description} />

          <p>{weatherData.weather[0].description} {weatherData.weather[0].icon}</p>
          <p>Temperature: {kelvinToCelsius(weatherData.main.temp)} °C</p>
          <p>Feels like: {kelvinToCelsius(weatherData.main.feels_like)} °C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Pressure: {weatherData.main.pressure} kpa</p>
        </div>
      ) : (
        <div class="item item1">
          No data available
        </div>
      )}
    </div>
  );
}

export default Weather;
