import { createSelector } from "reselect";

const selectCategory = state => state.category;

export const selectCategories = createSelector(
  [selectCategory],
  category => category.categoryItems
);

export const selectIsCategoryFetching = createSelector(
  [selectCategory],
  category => category.isFetching
);
