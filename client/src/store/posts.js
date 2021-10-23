import * as typeActions from '../actions/type';

const initialState = {
	posts: [],
};

const posts = (state = initialState, { type, payload }) => {
	switch (type) {
		case typeActions.POSTS_LOAD:
			return { ...state, posts: [...payload] };
		case typeActions.POSTS_NEW_POST:
			return { ...state, posts: [payload, ...state.posts] };
		default:
			return state;
	}
};

export default posts;
