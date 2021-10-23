import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as typeActions from '../actions/type';

import { authAPI } from '../api/authAPI';

export default function CurrentUser({ children }) {
	const dispatch = useDispatch();
	const { isLoading } = useSelector(state => state.site);

	useEffect(() => {
		const unLock = () => {
			dispatch({ type: typeActions.SITE_UNLOCK_LOAD });
		};
		const setLogin = res => {
			dispatch({ type: typeActions.USER_CURRENT, payload: res.user });
		};
		authAPI
			.currentUser()
			.then(res => {
				if (res.user) {
					setLogin(res);
					unLock();
				} else {
					unLock();
				}
			})
			.catch(err => {
				unLock();
			});
	}, [dispatch]);

	return <React.Fragment>{isLoading && children}</React.Fragment>;
}
