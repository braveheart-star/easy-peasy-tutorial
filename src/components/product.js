import React, { useCallback, useState } from "react";
import { products } from "../data";
import * as basketService from "../services/basket-service";

export default function Product({ id }) {
  // load the required product from state
  const product = products.find((product) => product.id === id);

  // state to track when we are saving to basket
  const [adding, setAdding] = useState(false);

  // callback to handle click, saving to basket
  const onAddToBasketClick = useCallback(async () => {
    setAdding(true);
    await basketService.addProductToBasket(product.id);
    setAdding(false);
  }, [product]);

  return (
    <div>
      <h2>{product.name}</h2>
      <p>
        <em>£ {product.price}</em>
      </p>
      {adding ? (
        "Adding..."
      ) : (
        <button onClick={onAddToBasketClick}>Add to basket</button>
      )}
    </div>
  );
}
