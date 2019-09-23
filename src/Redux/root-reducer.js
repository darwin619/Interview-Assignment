import { combineReducers } from "redux";
import categoryReducer from "./Category/category-reducer";
import productReducer from "./Product/product-reducer";
import toggleReducer from "./Toggle/toggle-reducer";
import tabReducer from "./Tab/tab-reducer";

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
  toggle: toggleReducer,
  tab: tabReducer
});

export default rootReducer;
