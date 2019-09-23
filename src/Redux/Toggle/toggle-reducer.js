import ToggleActionTypes from './toggle-types';

const INITIAL_STATE = {
	toggle: false,
	hidden: true
}

const toggleReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case ToggleActionTypes.TOGGLE_MORE_ITEMS: 
		return {
			...state,
			toggle: !state.toggle
		};
		case ToggleActionTypes.TOGGLE_DROPDOWN_HIDDEN: 
		return {
			...state,
			hidden: !state.hidden
		};
		default:
		return state;
	}
}

export default toggleReducer;