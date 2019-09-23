import CategoryActionTypes from "./category-types";

const INITIAL_STATE = {
  isFetching: true,
  categoryItems: []
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CategoryActionTypes.SET_CATEGORY_DATA: {
      return { ...state, categoryItems: payload.category_list };
    }
    case CategoryActionTypes.SET_CATEGORY_DATA_SUCCESS: {
      return { ...state, isFetching: false };
    }
    default:
      return state;
  }
};

export default categoryReducer;
