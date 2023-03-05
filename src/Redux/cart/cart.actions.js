import { ADD_CART } from "./cart.types";

export const addToCart = (product) => async (dispatch) => {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const duplicates = cart.filter(
    (cartItem) => cartItem.id + cartItem.name === product.id + product.name
  );
  if (duplicates.length === 0) {
    const productToAdd = {
      ...product,
      qty: 1,
    };

    cart.push(productToAdd);

    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: ADD_CART,
      payload: cart,
    });
  }
};
