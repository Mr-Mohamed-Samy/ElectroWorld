import React from "react";
import "./Header.css";
import image from "./assets/logo1.jpg";
import like from "./assets/heart-.png";
import cart from "./assets/shopping-cart.png";
import profile from "./assets/man.png";
import Search from "./Search.jsx";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory) {
      navigate(`/products/${selectedCategory}`);
    }
  };

  return (
    <>
      <div className="navbar">
        <Link to="/">
          <div className="logo_container">
            <img src={image} className="logo_style" alt="ElectroWorld Logo" />
            <h2 className="logo_text">ELECTROWORLD</h2>
          </div>
        </Link>
          <Search />
      </div>

      <div className="header">
        <Link to="/">Home</Link>

        <select onChange={handleCategoryChange} defaultValue="">
          <option value="" disabled>Categories</option>
          <option value="Cell phones">Cell Phones</option>
          <option value="Laptops">Laptops</option>
          <option value="Desktop computers">Desktop Computers</option>
          <option value="Monitors">Monitors</option>
          <option value="Accessories">Accessories</option>
          <option value="Tablets">Tablets</option>
          
          
        </select>

        <Link to="/">About Us</Link>

        <Link to="/">Contacts</Link>
        <div className="icons">
            <img src={like} className="heart_icon" alt="Wishlist" />
            <img src={cart} className="cart_icon" alt="Cart" />
            <img src={profile} className="profile_icon" alt="Profile" />
        </div>

      </div>

      
    </>
  );
}

export default Header;
