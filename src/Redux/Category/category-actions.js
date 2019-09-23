import CategoryActionTypes from "./category-types";
import { fetchCategory } from "../../Services/CategoryService";

export const getCategoriesSuccess = () => ({
  type: CategoryActionTypes.SET_CATEGORY_DATA_SUCCESS
});

export function getCategories() {
  return dispatch => {
    fetchCategory().then(data => {
      dispatch({
        type: CategoryActionTypes.SET_CATEGORY_DATA,
        payload: data
      });
      dispatch(getCategoriesSuccess());
    });
  };
}
