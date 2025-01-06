import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import './styles/styles.css';
//import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>  {/* Envolvemos la app con el Provider */}
    <App />
	</Provider>
  </React.StrictMode>
);
