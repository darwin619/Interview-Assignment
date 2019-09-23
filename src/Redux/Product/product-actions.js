import ProductActionTypes from "./product-types";
import { fetchProductList } from "../../Services/ProductListService";

export function getProductList(id) {
  return dispatch => {
    fetchProductList(id).then(data => {
      dispatch({
        type: ProductActionTypes.SET_PRODUCT_DATA,
        payload: data
      });
    });
  };
}
