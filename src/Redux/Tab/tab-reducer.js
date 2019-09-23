import TabActionTypes from "./tab-types";

const INITIAL_STATE = {
  value: 0
};

const tabReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case TabActionTypes.SET_TAB_VALUE: {
      return { ...state, value: payload };
    }
    default:
      return state;
  }
};

export default tabReducer;
