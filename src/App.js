import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Weather from './Weather';

function App() {
  const [city, setCity] = useState('Toronto');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Forecast</h1>
        <label>
          Enter your city: <input value={city}  onChange={e => setCity(e.target.value)} />
        </label>
        <Weather city={city} />
        <p>
           <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
