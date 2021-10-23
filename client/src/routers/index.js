import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ProtectedRoute } from '../utils/Protected';
import HomePage from '../views/screens/Home';
import LoginPage from '../views/screens/Auth/Login';
import RegisterPage from '../views/screens/Auth/Register';
import UserPage from '../views/screens/User/UserPage';

function Routers() {
	const { isLogged } = useSelector(state => state.user);

	return (
		<Switch>
			<ProtectedRoute path="/login" redirect="/" dependency={isLogged}>
				<LoginPage />
			</ProtectedRoute>
			<ProtectedRoute path="/register" redirect="/" dependency={isLogged}>
				<RegisterPage />
			</ProtectedRoute>
			<Route exact path="/friends">
				<h1>Friends</h1>
			</Route>
			<Route exact path="/:id">
				<UserPage />
			</Route>
			<Route exact path="/:id/about">
				<UserPage />
			</Route>
			<Route exact path="/:id/friends">
				<UserPage />
			</Route>
			<Route exact path="/:id/photos">
				<UserPage />
			</Route>
			<ProtectedRoute path="/" redirect="/login" dependency={!isLogged}>
				<HomePage />
			</ProtectedRoute>
		</Switch>
	);
}

export default Routers;
