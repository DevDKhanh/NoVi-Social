import * as typeActions from '../actions/type';
import { setItemStorage } from '../utils/localStorage';

const initialState = {
	isLogged: false,
	dataUser: {},
	infoUser: {},
};

const user = (state = initialState, { type, payload }) => {
	switch (type) {
		case typeActions.USER_REGISTER:
			const tokenSignup = payload.accessToken;
			setItemStorage('accessToken', tokenSignup);
			return { ...state, isLogged: true, dataUser: { ...payload } };

		case typeActions.USER_LOGIN:
			const tokenLogin = payload.accessToken;
			setItemStorage('accessToken', tokenLogin);
			return { ...state, isLogged: true, dataUser: { ...payload } };

		case typeActions.USER_INFO:
			return { ...state, infoUser: { ...payload } };

		case typeActions.USER_UPDATE_INFO:
			return { ...state, infoUser: { ...state.infoUser, ...payload } };

		case typeActions.USER_CURRENT:
			return { ...state, isLogged: true, dataUser: { ...payload } };

		default:
			return state;
	}
};

export default user;
