import { ADD_CART, REMOVE_CART } from "./cart.types";

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

export const removeFromCart = (id) => async (dispatch) => {
  let items = JSON.parse(localStorage.getItem("cart"));
  let UpdatedProducts = items.filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(UpdatedProducts));
  let cartItem = JSON.parse(localStorage.getItem("cart"));
  dispatch({ type: REMOVE_CART, payload: cartItem });
};
