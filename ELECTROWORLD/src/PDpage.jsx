import React from "react";
import { useParams, Link } from "react-router-dom";
import ProductDetails from "./ProductDetails.jsx";
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
import "./ProductDetails.css";
import Comment from "./Comment.jsx";

function PDpage() {
  const { id } = useParams();

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
      description: "High-performance smartphone with advanced features",
      price: 1009,
      images: [iph1, iph2],
      colors: ["silver", "blue"],
      rating: 4.9,
      category: "Cell phones",
    },
    {
      id: 5,
      name: "DELL XPS 13",
      description: "High-performance Laptop with advanced features",
      price: 999,
      images: [dell],
      colors: ["silver"],
      rating: 4,
      category: "Laptops",
    },
    {
      id: 6,
      name: "Desktop Computer",
      description: "High-performance Desktop Computer with advanced features",
      price: 1500,
      images: [dc],
      colors: ["black"],
      rating: 4.2,
      category: "Desktop Computer",
    },
    {
      id: 7,
      name: "Amazon Fire 7",
      description: "High-performance Tablets with advanced features",
      price: 100,
      images: [tab],
      colors: ["gray"],
      rating: 3.8,
      category: "Tablets",
    },
    {
      id: 8,
      name: "Logitech K270",
      description: "High-performance wireless keyboards with advanced features",
      price: 50,
      images: [clv],
      colors: ["black"],
      rating: 3.5,
      category: "Accessories",
    },
    {
      id: 9,
      name: "MSI MPG 321URX QD-OLED",
      description: "High-performance Gaming Laptop with advanced features",
      price: 950,
      images: [moni],
      colors: ["silver"],
      rating: 4.7,
      category: "Monitors",
    },
  ];

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== Number(id)
  );

  return (
    <div className="product-page">
      <h1>Product Details</h1>

      <ProductDetails product={product} />

      <h2 className="title">Related Products</h2>
      <div className="related-products">
        {relatedProducts.map((relatedProduct) => (
          <Link
            to={`/products/${relatedProduct.id}`}
            key={relatedProduct.id}
            className="related-product"
          >
            <img src={relatedProduct.images[0]} alt={relatedProduct.name} />
            <h3>{relatedProduct.name}</h3>
            <p>${relatedProduct.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
      <Comment productId={id} />
    </div>
  );
}

export default PDpage;