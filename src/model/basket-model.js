import { action } from "easy-peasy"; // 👈 import

const basketModel = {
  productIds: [2],
  //  👇 define an action to add a product to basket
  addProduct: action((state, payload) => {
    state.productIds.push(payload);
  }),
  //  👇 define an action to remove a product from basket
  removeProduct: action((state, payload) => {
    state.productIds.splice(payload, 1);
  }),
};

export default basketModel;
