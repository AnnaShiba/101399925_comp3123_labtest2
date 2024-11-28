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
      </header>
    </div>
  );
}

export default App;
