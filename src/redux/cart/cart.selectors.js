import { createSelector } from "reselect";

// Input selector
const selectCart = state => state.cart;

// Output selector
// Memoized selector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((accumulatedQuantity, cartItem) => {
      return cartItem.quantity + accumulatedQuantity;
    }, 0)
);
