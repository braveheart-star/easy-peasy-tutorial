import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data";

export default function ProductList() {
  return (
    <div>
      <h2>Our products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
