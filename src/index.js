import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Views/App';
import Login from './Components/Login';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Login />
  </React.StrictMode>
);

