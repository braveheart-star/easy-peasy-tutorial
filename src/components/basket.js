import { useStoreState } from "easy-peasy"; // 👈 import the hook

export default function Basket() {
  //       👇  map the state from store
  const basketProducts = useStoreState((state) =>
    // take the product ids from our basket...
    state.basket.productIds.map((productId) =>
      // and map them to products
      state.products.items.find((product) => product.id === productId)
    )
  );
}
