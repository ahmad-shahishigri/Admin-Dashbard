import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ← ADD THIS LINE
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* ← WRAP <App /> WITH THIS */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);