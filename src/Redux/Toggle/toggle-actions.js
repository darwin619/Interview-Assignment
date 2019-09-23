import ToggleActionTypes from './toggle-types';

export const toggleMoreItems = () => {
	return ({
		type: ToggleActionTypes.TOGGLE_MORE_ITEMS
	});
}

export const toggleHideDropdown = () => ({
  type: ToggleActionTypes.TOGGLE_DROPDOWN_HIDDEN
});