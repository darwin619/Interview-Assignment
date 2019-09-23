import CategoryActionTypes from "./category-types";
import { fetchCategory } from "../../Services/CategoryService";

export function getCategories() {
  return dispatch => {
    fetchCategory().then(data => {
      dispatch({
        type: CategoryActionTypes.SET_CATEGORY_DATA,
        payload: data
      });
    });
  };
}
