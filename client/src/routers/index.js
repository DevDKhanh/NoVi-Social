import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ProtectedRoute } from '../utils/Protected';
import HomePage from '../views/pages/Home';
import LoginPage from '../views/pages/Auth/Login';
import RegisterPage from '../views/pages/Auth/Register';
import UserPage from '../views/pages/User/UserPage';

function Routers() {
	const { isLogged } = useSelector(state => state.user);

	return (
		<Switch>
			<ProtectedRoute path="/login" redirect="/" position={isLogged}>
				<LoginPage />
			</ProtectedRoute>
			<ProtectedRoute path="/register" redirect="/" position={isLogged}>
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
			<ProtectedRoute path="/" redirect="/login" position={!isLogged}>
				<HomePage />
			</ProtectedRoute>
		</Switch>
	);
}

export default Routers;
