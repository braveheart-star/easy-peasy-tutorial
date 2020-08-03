import { useStoreState } from "easy-peasy"; // 👈 import the hook

export default function ProductList() {
  //       👇  map the state from store
  const products = useStoreState((state) => state.products.items);
  // ...
}
