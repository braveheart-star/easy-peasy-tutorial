import { useStoreState } from "easy-peasy"; // 👈 import the hook

export default function Product({ id }) {
  //       👇  map the state from store
  const product = useStoreState((state) =>
    state.products.items.find((product) => product.id === id)
  );
}
