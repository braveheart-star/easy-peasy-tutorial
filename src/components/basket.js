import React from "react";
import { Link } from "react-router-dom";
import { products, basket } from "../data";

export default function Basket() {
  // map the items in our basket against the product state
  // so we can show the names of the products in our basket
  const basketProducts = basket.map((productId) =>
    products.find((product) => product.id === productId)
  );

  return (
    <div>
      <h2>The merchandise</h2>
      <ul>
        {basketProducts.map((product, idx) => (
          <li key={idx}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>{" "}
            <button>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
