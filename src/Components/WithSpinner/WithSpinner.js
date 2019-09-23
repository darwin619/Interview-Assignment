import React from "react";

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? <div></div> : <WrappedComponent {...otherProps} />;
};

export default WithSpinner;
