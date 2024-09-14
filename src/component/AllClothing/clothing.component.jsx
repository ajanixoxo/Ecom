import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShopData from '../../shpData.json';
import './clothing.styles.css';

const ShopAll = () => {
  const navigate = useNavigate();

  const handleClick = (productName) => {
    navigate(`/product/${encodeURIComponent(productName)}`);
  };

  return (
    <div className="shop-container">
      {ShopData.map(({ id, imageUrl, price, name }) => (
        <div 
          key={id} 
          className="shop"
          onClick={() => handleClick(name)} // Call handleClick on click
          style={{ cursor: 'pointer' }} // Optional: show pointer cursor on hover
        >
          <img src={imageUrl} alt={`Item ${id}`} />
          <div className="priceandname">
            <p>{name}</p>
            <p>${price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopAll;
