import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";

/* Function that takes some component tha we want to wrap with the spinner loading functionality
and the component is passed to the component that wraps it (the HOC) */
const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
