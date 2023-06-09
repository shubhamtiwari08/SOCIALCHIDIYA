import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { makeServer } from "./server";
// import your fontawesome library
import '../src/Components/FontawesomIcons/FonteawesomeIcons';
import AuthProvider from './Context/AuthContext/AuthContext';
import UserProvider from './Context/userContext/userContext';
import PostProvider from './Context/PostContext/PostProvider';

// Call make Server
makeServer();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <AuthProvider>
  <UserProvider>
  <PostProvider>
    <App />
  </PostProvider>
  </UserProvider>
  </AuthProvider>
  </BrowserRouter>
  </React.StrictMode>
);