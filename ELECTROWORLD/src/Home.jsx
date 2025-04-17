import CategoryCard from "./CategoryCard.jsx";
import ProductCard from "./ProductCard.jsx"; 
import products from "./ProductsData.js";
import Phone from "./assets/phone.jpeg";
import Laptop from "./assets/laptop.png";
import Desktop from "./assets/desktopComputer.jpeg";
import Monitors from "./assets/monitors.png";
import Accessories from "./assets/accessories.jpeg";
import Tablets from "./assets/tablets.jpg";
import "./Home.css"; 

function Home() {
  

  return (
    <>
      <h1>Categories</h1>
      <div className="categories">
        <CategoryCard category="Cell phones" logo={Phone} />
        <CategoryCard category="Laptops" logo={Laptop} />
        <CategoryCard category="Desktop computers" logo={Desktop} />
        <CategoryCard category="Monitors" logo={Monitors} />
        <CategoryCard category="Accessories" logo={Accessories} />
        <CategoryCard category="Tablets" logo={Tablets} />
      </div>

      <h1>All Items</h1>
      <div className="AllItems">
        <div className="item-list">
          {products.map((product) => (
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
    </>
  );
}

export default Home;
