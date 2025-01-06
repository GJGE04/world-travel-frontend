import React, { useState } from 'react';
import './App.css';
import Weather from './components/Weather'; 
import TravelDestinations from './components/TravelDestinations'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to World Travel</h1>
        <p>Find the best travel destinations and weather info!</p>
		<TravelDestinations />
        <Weather />  {/* Componente Weather que vamos a usar */}
      </header>
    </div>
  );
}

export default App;
