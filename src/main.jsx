import { StrictMode } from 'react';
import { CartProvider } from "./contexts/cart.context";
import { createRoot } from 'react-dom/client'; // Single import
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import './index.css';

// Ensure `react-router-dom` is installed and imported correctly
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Create the root element and render the components
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  </StrictMode>
);