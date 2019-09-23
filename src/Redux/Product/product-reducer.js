import ProductActionTypes from "./product-types";

const INITIAL_STATE = {
  product: []
};

const productReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ProductActionTypes.SET_PRODUCT_DATA: {
      return { ...state, product: payload.products };
    }
    default:
      return state;
  }
};

export default productReducer;
