import React, { useCallback, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import * as basketService from "../services/basket-service";

export default function Product({ id }) {
  const addProductToBasket = useStoreActions(
    (actions) => actions.basket.addProduct
  );
  const product = useStoreState((state) =>
    state.products.items.find((product) => product.id === id)
  );

  // state to track when we are saving to basket
  const [adding, setAdding] = useState(false);

  // callback to handle click, saving to basket
  const onAddToBasketClick = useCallback(async () => {
    setAdding(true);
    await basketService.addProductToBasket(product.id);
    addProductToBasket(product.id);
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
