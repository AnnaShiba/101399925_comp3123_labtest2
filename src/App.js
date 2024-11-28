import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState('Toronto');

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=', {})
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setWeatherData(data);
      })
      .catch(error => console.error(error));
  }, [city]);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Forecast</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          WEATHER WEATHER WEATHER <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main class="hero">
          <section>
              <h2>Forecast</h2>
              <h2>Toronto</h2>
          </section>

          <div className="box">
            <div class="item item1">
                <a href="f.html">
                    <h2>Today Forecast</h2>
    
                    <p>Lorem.</p>
                </a>
            </div>
            <div class="item item2">
                <a href="f.html">
                    <h2>Weekly Forecast</h2>
    
                    <p>Lorem.</p>
                </a>
            </div>
          </div>
      </main>
    </div>
  );
}

export default App;
