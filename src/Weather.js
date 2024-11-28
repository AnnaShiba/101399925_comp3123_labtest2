import { useEffect, useState } from 'react';
import './App.css';

function kelvinToCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}

function Weather({ city }) {
  const today = new Date();
  const [weatherData, setWeatherData] = useState({ weather: [ { icon: '01d', description: 'test' } ], main: { temp: 0, feels_like: 0, humidity: 0, pressure: 0 } });

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
    <div className="weather-box">
      {weatherData.weather ? (
        <div>
          <h2>{new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(today)} Forecast</h2>
          <div class="item">
            <div class="weather-column">
              <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].description} />
              <p>{weatherData.weather[0].description}</p>
            </div>
            <div class="weather-column">
              <p>Temperature:<br/>{kelvinToCelsius(weatherData.main.temp)} °C</p>
              <p>Feels like:<br/>{kelvinToCelsius(weatherData.main.feels_like)} °C</p>
              <p>Humidity:<br/>{weatherData.main.humidity}%</p>
              <p>Pressure:<br/>{weatherData.main.pressure} kpa</p>
            </div>
          </div>
        </div>
      ) : (
        <div class="item">
          No data available
        </div>
      )}
    </div>
  );
}

export default Weather;
