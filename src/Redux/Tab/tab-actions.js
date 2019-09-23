import TabActionTypes from './tab-types';

export const setTabValue = item => {
	return ({
		type: TabActionTypes.SET_TAB_VALUE,
		payload: item
	});
}