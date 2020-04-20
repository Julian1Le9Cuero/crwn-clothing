import React from "react";

import Spinner from "../spinner/spinner.component";
/* Function that takes some component tha we want to wrap with the spinner loading functionality
and the component is passed to the component that wraps it (the HOC) */
const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};

export default WithSpinner;
