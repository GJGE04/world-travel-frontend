import React, { useState } from 'react';
import { getWeather } from '../api/weather';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchWeather = async () => {
    setLoading(true);
    setError(null);  // Limpiar errores previos
    const data = await getWeather(city);
    if (data) {
      setWeatherData(data);  // Guardamos los datos del clima
    } else {
      setError('No se pudo obtener los datos del clima para esta ciudad.');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Weather</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={handleFetchWeather} disabled={loading}>
        {loading ? 'Cargando...' : 'Obtener Clima'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {weatherData && !loading && (
        <div>
          <h3>{weatherData.name} ({weatherData.sys.country})</h3>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
