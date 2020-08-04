import React from "react";
import { Link } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";

export default function Basket() {
  const removeProductFromBasket = useStoreActions(
    (actions) => actions.basket.removeProduct
  );
  const basketProducts = useStoreState((state) => state.basket.products);

  return (
    <div>
      <h2>The merchandise</h2>
      <ul>
        {basketProducts.map((product, idx) => (
          <li key={idx}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>{" "}
            <button onClick={() => removeProductFromBasket(idx)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
