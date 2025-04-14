import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ id, name, image, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <div className="product-price">{price}</div>
      <div className="button-row">
        <Link to={`/product/${id}`} className="btn details">View Details</Link>
        <button className="btn buy">Buy Now</button>
      </div>
    </div>
  );
}

export default ProductCard;
