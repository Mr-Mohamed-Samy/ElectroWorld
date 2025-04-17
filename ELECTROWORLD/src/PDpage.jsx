import React from "react";
import { useParams, Link } from "react-router-dom";
import ProductDetails from "./ProductDetails.jsx";
import "./ProductDetails.css";
import Comment from "./Comment.jsx";
import products from "./ProductsData.js";
function PDpage() {
  const { id } = useParams();


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