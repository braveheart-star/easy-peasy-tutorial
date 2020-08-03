import { useStoreState } from "easy-peasy";

export default function BasketCount() {
  const basketCount = useStoreState((state) => state.basket.count);
}
