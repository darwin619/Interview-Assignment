import { createSelector } from 'reselect';

const selectToggle = state => state.toggle;

export const selectToggleMoreItems = createSelector(
  [selectToggle],
  toggle => toggle.toggle
);

export const selectDropdownHidden = createSelector(
  [selectToggle],
  toggle => toggle.hidden
);