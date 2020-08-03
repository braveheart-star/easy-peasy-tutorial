import React from "react";

import { useStoreState, useStoreActions } from "easy-peasy"; // 👈 import the hook
import { useCallback } from "react";

export default function Product({ id }) {
  //       👇  map the state from store
  const product = useStoreState((state) =>
    state.products.items.find((product) => product.id === id)
  );

  const addProductToBasket = useStoreActions(
    (actions) => actions.basket.addProduct
  );

  const onAddToBasketClick = useCallback(async () => {
    // ...
    addProductToBasket(product.id); // 👈 dispatch our action
    // ...
  }, [product]);

  return (
    <div>
      {/* ... */}
      <button onClick={onAddToBasketClick}>Add to basket</button>
    </div>
  );
}
