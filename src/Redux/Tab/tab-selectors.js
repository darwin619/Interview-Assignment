import { createSelector } from 'reselect';

const selectTab = state => state.tab;

export const selectTabValue = createSelector(
  [selectTab],
  tab => tab.value
);