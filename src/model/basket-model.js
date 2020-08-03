import { action, thunk, computed } from "easy-peasy";
//                 👆 add the import
import * as basketService from "../services/basket-service";
//              👆 import the mock service

const basketModel = {
  productIds: [2],

  count: computed((state) => state.productIds.length),

  products: computed(
    // 👇 These are our state resolvers, ...
    [
      (state) => state.productIds,
      (state, storeState) => storeState.products.items,
    ],
    // the results of our state resolvers become the input args
    //   👇         👇
    (productIds, products) =>
      productIds.map((productId) =>
        products.find((product) => product.id === productId)
      )
  ),

  //    add a new action which we can call when the call to the basket
  // 👇 service has completed
  addedProduct: action((state, payload) => {
    state.productIds.push(payload);
  }),
  //  👇 refactor our addProduct action into a thunk which will call the service
  addProduct: thunk(async (actions, payload) => {
    // call our service
    await basketService.addProductToBasket(payload);
    // then dispatch an action to update state
    actions.addedProduct(payload);
  }),

  //  👇 define an action to remove a product from basket
  removeProduct: action((state, payload) => {
    state.productIds.splice(payload, 1);
  }),
};

export default basketModel;
