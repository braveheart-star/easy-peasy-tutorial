/**
 * This is just a mock service to represent a real world http API endpoint
 */

export const addProductToBasket = (id) =>
  new Promise((resolve) => setTimeout(resolve, 750));
