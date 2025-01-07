import axios from 'axios';

// Función para obtener los datos del clima para una ciudad
export const getWeather = async (city) => {
  const apiKey = '103ed4d5b1b6368874ecc0df28262726';  // Sustituir por tu clave API real
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // También puedes cambiar a 'imperial' si prefieres Fahrenheit

  try {
    const response = await axios.get(url);
    return response.data;  // Retorna los datos del clima
  } catch (error) {
    console.error('Error fetching weather data', error);
    return null;  // Si ocurre un error, retorna null
  }
};

export default async function handler(req, res) {
  const { city } = req.query;  // Obtener el nombre de la ciudad de los parámetros de la solicitud

  const apiKey = '103ed4d5b1b6368874ecc0df28262726';  // Tu clave API de OpenWeatherMap
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);  // Devuelve los datos de la API al frontend
  } catch (error) {
    res.status(500).json({ error: 'Error fetching weather data' });
  }
}
