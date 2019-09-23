import ProductActionTypes from "./product-types";

const INITIAL_STATE = {
  isFetching: true,
  product: []
};

const productReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ProductActionTypes.SET_PRODUCT_DATA: {
      return { ...state, product: payload.products };
    }
    case ProductActionTypes.SET_PRODUCT_DATA_SUCCESS: {
      return { ...state, isFetching: false };
    }
    default:
      return state;
  }
};

export default productReducer;
