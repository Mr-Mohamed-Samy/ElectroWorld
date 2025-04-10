import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import image from "./assets/logo1.jpg";
import like from "./assets/heart-.png";
import cart from "./assets/shopping-cart.png";
import profile from "./assets/man.png";
import Search from "./Search.jsx";

function Header() {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory) {
      navigate(`/products/${selectedCategory}`);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <div className="logo_container">
            <img src={image} className="logo_style" alt="ElectroWorld Logo" />
            <h2 className="logo_text">Electorworld</h2>
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
          <img src={like} className="img" alt="Wishlist" />
          <img src={cart} className="img" alt="Cart" />
          
          <div className="profile-container" ref={dropdownRef}>
            <img
              src={profile}
              className="img profile-icon"
              alt="Profile"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            />
            {isDropdownOpen && (
              <div className="profile-dropdown">
                <Link to="/signin">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
