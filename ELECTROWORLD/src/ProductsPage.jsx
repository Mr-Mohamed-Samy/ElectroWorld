import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import "./ProductsPage.css"; 
import products from "./ProductsData.js";


function ProductsPage() {
   
    const { category } = useParams(); 
    console.log("Category:", category);
    const normalizedCategory = category.toLowerCase().replace(/-/g, " ");
    
    const filteredProducts = products.filter(
      (product) =>
        product.category?.toLowerCase().replace(/\s+/g, " ") === normalizedCategory
    );
    
    console.log("Filtered Products:", filteredProducts);
    return (
      <div className="products-page">
       <h2 style={{ color: "white" }}>{category}</h2>
        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              id={product.id}
              name={product.name} 
              image={product.images[0]} 
              price={product.price} 
            />
          ))}
        </div>
      </div>
    );
  }
export default ProductsPage;