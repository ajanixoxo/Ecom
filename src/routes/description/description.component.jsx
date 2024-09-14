import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import ShopData from "../../shpData.json";
import Navbar from '../../routes/navigation/navbar.component';
import "./description.styles.css";

const Description = () => {
  const { productName } = useParams();
  const { addItemToCart } = useContext(CartContext);
  const product = ShopData.find((item) => item.name === decodeURIComponent(productName));

  // State to handle the selected image for preview
  const [selectedImage, setSelectedImage] = useState(product.imageUrl);

  // States for expanding/collapsing sections
  const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);
  const [isShippingReturnsOpen, setIsShippingReturnsOpen] = useState(false);

  // Toggle functions
  const toggleProductDetails = () => setIsProductDetailsOpen(!isProductDetailsOpen);
  const toggleShippingReturns = () => setIsShippingReturnsOpen(!isShippingReturnsOpen);

  // If no product is found, display an error
  if (!product) {
    return <div>Product not found</div>;
  }

  // Function to add the product to the cart
  const addProductToCart = () => {
    addItemToCart(product);  // Pass the product when adding to cart
  };

  return (
    <div className="description-container">
      <Navbar />
      <div className="product-preview">
        {/* Show the selected image */}
        <img src={selectedImage} alt={product.name} className="preview-image" />
      </div>

      <div className="thumbnails">
        {/* Thumbnail images */}
        <img
          src={product.imageUrl}
          alt={`${product.name} Thumbnail 1`}
          className="thumbnail"
          onClick={() => setSelectedImage(product.imageUrl)}
        />
        <img
          src={product.imageUrl2}
          alt={`${product.name} Thumbnail 2`}
          className="thumbnail"
          onClick={() => setSelectedImage(product.imageUrl2)}
        />
      </div>

      <div className="product-details">
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
      </div>

      {/* Add to Cart and Buy Now buttons */}
      <div className="button-container">
        <button className="add-to-cart-button" onClick={addProductToCart}>Add to Cart</button>
      </div>

      {/* Expandable Product Details Section */}
      <div className="details-section">
        <h3 onClick={toggleProductDetails} className="details-header">
          Product Details {isProductDetailsOpen ? '-' : '+'}
        </h3>
        {isProductDetailsOpen && (
          <div className="details-content">
            <p>{product.description}</p>
          </div>
        )}
      </div>

      {/* Expandable Shipping & Returns Section */}
      <div className="details-section">
        <h3 onClick={toggleShippingReturns} className="details-header">
          Shipping & Returns {isShippingReturnsOpen ? '-' : '+'}
        </h3>
        {isShippingReturnsOpen && (
          <div className="details-content">
            <p>Free shipping on orders over $50.</p>
            <p>Return policy: 30 days after purchase.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Description;
