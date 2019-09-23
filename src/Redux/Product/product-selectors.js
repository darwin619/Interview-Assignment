import { createSelector } from "reselect";

const selectProduct = state => state.product;

export const selectProductList = createSelector(
  [selectProduct],
  product => product.product
);

export const selectIsProductListFetching = createSelector(
  [selectProduct],
  product => product.isFetching
);
