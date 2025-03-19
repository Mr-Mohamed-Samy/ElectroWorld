import { Link } from "react-router-dom";

function CategoryCard({ category, logo }) {
  return (
    <Link to={`/products/${category}`} className="category-link">
      <div className="CatCard">
        <div className="CatLogo">
          <img src={logo} className="logo" alt={category} />
        </div>
        <h3>{category}</h3>
      </div>
    </Link>
  );
}

export default CategoryCard;
