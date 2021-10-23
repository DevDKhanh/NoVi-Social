import { combineReducers } from 'redux';

import site from './site';
import user from './user';
import posts from './posts';

const reducers = combineReducers({
	site,
	user,
	posts,
});

export default reducers;
