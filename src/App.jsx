// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Greeting from './component/Greetingpage/greeting.component';
import Description from './routes/description/description.component';
import Checkout from './routes/checkout/checkout.component';
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    
      <div className="content">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Greeting />} />
          <Route path="/product/:productName" element={<Description />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
  );
}

export default App;
