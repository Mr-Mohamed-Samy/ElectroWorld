import { Link } from "react-router-dom";
import "./CategoryCard.css"; 
function CategoryCard({ category, logo }) {
  return (
    <Link to={`/products/category/${category.toLowerCase().replace(/\s+/g, "-")}`}>

      <div className="CatCard">
          <img src={logo} className="logo" alt={category} />
      </div>
    </Link>
  );
}

export default CategoryCard;
