import * as typeActions from '../actions/type';

const initialState = {
	isLoading: false,
	isShowSelectImg: false,
	isShowForm: false,
};

const site = (state = initialState, { type, payload }) => {
	switch (type) {
		case typeActions.SITE_UNLOCK_LOAD:
			return { ...state, isLoading: true };
		case typeActions.SITE_TOGGLE_IMG:
			return { ...state, isShowSelectImg: payload };
		case typeActions.SITE_TOGGLE_FORM:
			return { ...state, isShowForm: payload };
		default:
			return state;
	}
};

export default site;
