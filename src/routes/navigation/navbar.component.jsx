import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./navbar.styles.css";

const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <h1>Dappermint</h1>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/checkout">Cart ({cartCount})</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
