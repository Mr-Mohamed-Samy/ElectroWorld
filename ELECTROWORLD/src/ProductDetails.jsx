import React, { useState, useEffect } from "react";
import "./ProductDetails.css";

const ProductDetails = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  
  useEffect(() => {
    setSelectedImage(product.images[0]); 
  }, [product]); 

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? "filled" : ""}`}>
          {i <= rating ? "★" : "☆"}
        </span>
      );
    }
    return <div className="star-rating">{stars}</div>;
  };

  return (
    <div className="product-card-details">
      <div className="product-gallery">
        <div className="main-image">
          <img src={selectedImage} alt={product.name} />
        </div>
        <div className="thumbnail-images">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setSelectedImage(image)}
              className={`thumbnail ${selectedImage === image ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="star-rating-container">
          <StarRating rating={product.rating} />
          <span className="rating-text">({product.rating.toFixed(1)})</span>
        </div>
        <div className="color-selection">
          <label>Choose a color:</label>
          <div className="color-options">
             {product.colors.map((color, index) => (
              <button
                key={index}
                className={`color-option ${selectedColor === color ? "selected" : ""}`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorChange(color)}
              ></button>
            ))}
          </div>
        </div>
        <div className="quantity-selection">
          <label>Quantity:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="quantity-input"
          />
        </div>
        <div className="bttns">
          <div className="product-pricee">{product.price.toFixed(2)}$</div>
          <button className="add-to-cart-btn">Add to Cart</button>
          <button className="add-to-cart-btn">Buy Now</button>
        </div>    
      </div>
    </div>
  );
};

export default ProductDetails;