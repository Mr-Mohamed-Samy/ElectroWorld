import CategoryCard from "./CategoryCard.jsx";
import Phone from "./assets/phone.jpeg";
import Laptop from "./assets/laptop.png";
import Desktop from "./assets/desktopComputer.jpeg";
import Monitors from "./assets/monitors.png";
import Accessories from "./assets/accessories.jpeg";
import Tablets from "./assets/tablets.jpg";

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
    </>
  );
}

export default Home;
