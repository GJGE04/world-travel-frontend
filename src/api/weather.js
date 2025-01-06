import axios from 'axios';

// Función para obtener los datos del clima para una ciudad
export const getWeather = async (city) => {
  const apiKey = '103ed4d5b1b6368874ecc0df28262726';  // Sustituir por tu clave API real
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // También puedes cambiar a 'imperial' si prefieres Fahrenheit

  try {
    const response = await axios.get(url);
    return response.data;  // Retorna los datos del clima
  } catch (error) {
    console.error('Error fetching weather data', error);
    return null;  // Si ocurre un error, retorna null
  }
};
