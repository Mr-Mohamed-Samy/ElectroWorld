import { Link } from "react-router-dom";

function ProductCard({ id, name, image, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">{price}</p>
      <Link to={`/product/${id}`} className="view-details">View Details</Link>
    </div>
  );
}

export default ProductCard;
