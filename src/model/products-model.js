import { computed } from "easy-peasy";

const productsModel = {
  items: [
    { id: 1, name: "Broccoli", price: 2.5 },
    { id: 2, name: "Carrots", price: 4 },
  ],
  getById: computed((state) => (id) =>
    state.items.find((product) => product.id === id)
  ),
};

export default productsModel;
