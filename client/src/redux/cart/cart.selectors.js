import { createSelector } from "reselect";

// Input selector
const selectCart = state => state.cart;

// Output selector
// Memoized selector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((accumulatedQuantity, cartItem) => {
      return cartItem.quantity + accumulatedQuantity;
    }, 0)
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((accumulatedPrice, cartItem) => {
    return accumulatedPrice + cartItem.price * cartItem.quantity;
  }, 0)
);
