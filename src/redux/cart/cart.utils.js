// cartItems= Current Items in the cartItems array
// cartItemToAdd= Cart Item that we want to add
export const addItemToCart = (cartItems, cartItemToAdd) => {
  // Returns true when it finds the first item based on the function inside the callback
  //   If it does not find anyhing it will throw undefined
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    // Return new array because we have to proivde new versions of the state in order for the components to re render properly
    return cartItems.map(
      cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem //Return existing item cause there's no need to update
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
