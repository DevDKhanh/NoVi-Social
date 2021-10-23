import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { userAPI } from './api/userAPI';
import { ProtectedComponent } from './utils/Protected';
import * as typeActions from './actions/type';
import Routers from './routers';
import Header from './views/components/Header';
import CurrentUser from './auth/CurrentUser';

function App() {
	const dispatch = useDispatch();
	const { isLogged, dataUser } = useSelector(sate => sate.user);

	useEffect(() => {
		if (isLogged) {
			userAPI
				.getInfoPublic(dataUser.email)
				.then(res => {
					dispatch({
						type: typeActions.USER_INFO,
						payload: { ...res },
					});
				})
				.catch(err => console.log('Có lỗi', err));
		}
	}, [isLogged, dataUser.email, dispatch]);

	return (
		<Router>
			<CurrentUser>
				<ProtectedComponent dependency={isLogged}>
					<Header />
				</ProtectedComponent>
				<Routers />
			</CurrentUser>
		</Router>
	);
}

export default App;
