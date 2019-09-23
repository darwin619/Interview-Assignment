import CategoryActionTypes from "./category-types";

const INITIAL_STATE = {
  category: ""
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CategoryActionTypes.SET_CATEGORY_DATA: {
      return { ...state, category: payload.category_list };
    }
    default:
      return state;
  }
};

export default categoryReducer;
