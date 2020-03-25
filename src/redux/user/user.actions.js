// It takes one parameter: the user object
export const setCurrentUser = user => {
  // This function returns an action object
  return {
    type: "SET_CURRENT_USER",
    payload: user
  };
};
