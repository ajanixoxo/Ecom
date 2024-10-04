import { StrictMode } from 'react';
import { CartProvider } from "./contexts/cart.context";
import { createRoot } from 'react-dom/client'; // Single import
import App from './App.jsx';
import './index.css';

// Ensure `react-router-dom` is installed and imported correctly
import { BrowserRouter } from 'react-router-dom';

// Create the root element and render the components
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
      </BrowserRouter>
  </StrictMode>
);