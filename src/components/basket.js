import React from "react";

import { useStoreState, useStoreActions } from "easy-peasy"; // 👈 import the hook

export default function Basket() {
  //  map our action 👇
  const removeProductFromBasket = useStoreActions(
    (actions) => actions.basket.removeProduct
  );

  //       👇  map the state from store
  const basketProducts = useStoreState((state) => state.basket.products);

  return (
    <div>
      {basketProducts.map((product, idx) => (
        <button onClick={() => removeProductFromBasket(idx)}>Remove</button>
      ))}
      {/* ... */}
    </div>
  );
}
