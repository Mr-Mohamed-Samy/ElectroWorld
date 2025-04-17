
import pro1 from "./assets/airpod.jpg";
import pro2 from "./assets/airpods1.webp";
import pro3 from "./assets/airpods2.jpg";
import pro4 from "./assets/airpods3.jpg";
import pro5 from "./assets/airpods4.jpg";
import pro6 from "./assets/airpods5.jpg";
import iph1 from "./assets/iphone-12-pro-max-blue.png";
import iph2 from "./assets/iphone-12-pro-max-silver.jpg";
import dell from "./assets/DELL.jpg";
import clv from "./assets/clavier.jpg";
import dc from "./assets/Desktop-Computer.jpg";
import moni from "./assets/monitors.png";
import tab from "./assets/Amazon-Fire 7.jpg";
let products = [
  {
    id: 1,
    name: "Airpods",
    description: "High-quality wireless earbuds with noise cancellation.",
    price: 25.99,
    images: [pro5, pro6],
    colors: ["white", "red"],
    rating: 4.5,
    category: "Accessories",
  },
  {
    id: 2,
    name: "Airpods Pro",
    description: "Premium noise-cancelling wireless earbuds.",
    price: 32.99,
    images: [pro3, pro4],
    colors: ["black", "blue"],
    rating: 4.7,
    category: "Accessories",
  },
  {
    id: 3,
    name: "Airpods Max",
    description: "Over-ear headphones with high-fidelity audio.",
    price: 49.99,
    images: [pro1, pro2],
    colors: ["blue", "purple", "red", "black"],
    rating: 4.8,
    category: "Accessories",
  },
  {
    id: 4,
    name: "iPhone 12 Pro Max",
    description: "High-performance smartphone with advanced features.",
    price: 1009,
    images: [iph1, iph2],
    colors: ["silver", "blue"],
    rating: 4.9,
    category: "Cell phones",
  },
  {
    id: 5,
    name: "DELL XPS 13",
    description: "Lightweight laptop with 13-inch display and high performance.",
    price: 999,
    images: [dell],
    colors: ["silver"],
    rating: 4,
    category: "Laptops",
  },
  {
    id: 6,
    name: "Desktop Computer",
    description: "Powerful desktop computer for work and gaming.",
    price: 1500,
    images: [dc],
    colors: ["black"],
    rating: 4.2,
    category: "Desktop computers",
  },
  {
    id: 7,
    name: "Amazon Fire 7",
    description: "Budget-friendly tablet with Amazon ecosystem.",
    price: 100,
    images: [tab],
    colors: ["gray"],
    rating: 3.8,
    category: "Tablets",
  },
  {
    id: 8,
    name: "Logitech K270",
    description: "Reliable wireless keyboard with long battery life.",
    price: 50,
    images: [clv],
    colors: ["black"],
    rating: 3.5,
    category: "Accessories",
  },
  {
    id: 9,
    name: "MSI MPG 321URX QD-OLED",
    description: "High-end gaming monitor with OLED technology.",
    price: 950,
    images: [moni],
    colors: ["silver"],
    rating: 4.7,
    category: "Monitors",
  },
  {
    id: 10,
    name: "iPhone 12 Pro Max",
    description: "Flagship Apple smartphone with excellent performance.",
    price: 1009,
    images: [
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg"
    ],
    colors: ["gold", "blue"],
    rating: 4.9,
    category: "Cell phones",
  },
  {
    id: 11,
    name: "DELL XPS 13",
    description: "Premium ultrabook with edge-to-edge display.",
    price: 999,
    images: [
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9350/media-gallery/graphite/notebook-xps-13-9350-t-oled-gy-gallery-5.psd?fmt=pjpg&pscan=auto&scl=1&wid=3509&hei=2071&qlt=100,1&resMode=sharp2&size=3509,2071&chrss=full&imwidth=5000"
    ],
    colors: ["silver", "black"],
    rating: 4.2,
    category: "Laptops",
  },
  {
    id: 12,
    name: "Desktop Computer",
    description: "Workstation desktop for productivity and media tasks.",
    price: 600,
    images: [
      "https://i.pcmag.com/imagery/reviews/02hQ4XTQl2pvwMEPmbc88qk-1..v1730134122.jpg"
    ],
    colors: ["black"],
    rating: 4.0,
    category: "Desktop computers",
  },
  {
    id: 13,
    name: "Amazon Fire 7",
    description: "Compact tablet with 7-inch screen and Alexa integration.",
    price: 50,
    images: [
      "https://hotspotelectronics.co.ke/wp-content/uploads/2024/03/Amazon-Fire-7-Tab-black.png"
    ],
    colors: ["black", "blue"],
    rating: 3.6,
    category: "Tablets",
  },
  {
    id: 14,
    name: "Logitech K270",
    description: "Durable and compact wireless keyboard for daily use.",
    price: 30,
    images: [
      "https://logitech.onlinesalestore.pk/cdn/shop/products/logitech-k270-wireless-keyboard-01-logitech-pakistan.jpg?v=1639228107"
    ],
    colors: ["black"],
    rating: 3.8,
    category: "Accessories",
  },
  {
    id: 15,
    name: "MSI MPG 321URX QD-OLED",
    description: "32-inch OLED gaming monitor with ultra-fast refresh rate.",
    price: 950,
    images: [
      "https://asset.msi.com/resize/image/global/product/product_1703740517dd560f186d6303a9bfd79c9b904dea3a.png62405b38c58fe0f07fcef2367d8a9ba1/600.png"
    ],
    colors: ["black", "gray"],
    rating: 4.7,
    category: "Monitors",
  }
];

  export default products;