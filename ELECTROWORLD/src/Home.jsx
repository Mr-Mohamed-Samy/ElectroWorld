import CategoryCard from "./CategoryCard.jsx";
import ProductCard from "./ProductCard.jsx"; // Make sure this is imported
import Phone from "./assets/phone.jpeg";
import Laptop from "./assets/laptop.png";
import Desktop from "./assets/desktopComputer.jpeg";
import Monitors from "./assets/monitors.png";
import Accessories from "./assets/accessories.jpeg";
import Tablets from "./assets/tablets.jpg";
import "./Home.css"; // Make sure this is imported

function Home() {
  let products = [
    {
      id: 1,
      category: "Cell phones",
      name: "iPhone 12 Pro Max",
      price: "1009$",
      image:
        "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg",
    },
    {
      id: 2,
      category: "Laptops",
      name: "DELL XPS 13",
      price: "999$",
      image:
        "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9350/media-gallery/graphite/notebook-xps-13-9350-t-oled-gy-gallery-5.psd?fmt=pjpg&pscan=auto&scl=1&wid=3509&hei=2071&qlt=100,1&resMode=sharp2&size=3509,2071&chrss=full&imwidth=5000",
    },
    {
      id: 3,
      category: "Desktop computers",
      name: "Desktop Computer",
      price: "600$",
      image:
        "https://i.pcmag.com/imagery/reviews/02hQ4XTQl2pvwMEPmbc88qk-1..v1730134122.jpg",
    },
    {
      id: 4,
      category: "Tablets",
      name: "Amazon Fire 7",
      price: "50$",
      image:
        "https://hotspotelectronics.co.ke/wp-content/uploads/2024/03/Amazon-Fire-7-Tab-black.png",
    },
    {
      id: 5,
      category: "Accessories",
      name: "Logitech K270",
      price: "30$",
      image:
        "https://logitech.onlinesalestore.pk/cdn/shop/products/logitech-k270-wireless-keyboard-01-logitech-pakistan.jpg?v=1639228107",
    },
    {
      id: 6,
      category: "Monitors",
      name: "MSI MPG 321URX QD-OLED",
      price: "950$",
      image:
        "https://asset.msi.com/resize/image/global/product/product_1703740517dd560f186d6303a9bfd79c9b904dea3a.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
    },
  ];

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
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
