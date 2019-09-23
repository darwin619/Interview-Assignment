import ProductActionTypes from "./product-types";
import { fetchProductList } from "../../Services/ProductListService";

export const getProductListSuccess = () => ({
  type: ProductActionTypes.SET_PRODUCT_DATA_SUCCESS
});

export const getProductList = id => {
  return dispatch => {
    fetchProductList(id).then(data => {
      dispatch({
        type: ProductActionTypes.SET_PRODUCT_DATA,
        payload: data
      });
      dispatch(getProductListSuccess());
    });
  };
}
