import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { makeServer } from "./server";
// import your fontawesome library
import '../src/Components/FontawesomIcons/FonteawesomeIcons';
import AuthProvider from './Context/AuthContext/AuthContext';

// Call make Server
makeServer();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <AuthProvider>
    <App />
  </AuthProvider>
  </BrowserRouter>
  </React.StrictMode>
);