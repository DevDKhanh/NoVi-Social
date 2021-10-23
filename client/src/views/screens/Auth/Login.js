import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as typeActions from '../../../actions/type';
import { authAPI } from '../../../api/authAPI';
import Input from './components/Input';
import './style/index.scss';

function LoginPage() {
	const dispatch = useDispatch();
	const [dataForm, setDataForm] = useState({ email: '', password: '' });

	const handleSubmit = e => {
		e.preventDefault();
		authAPI
			.login(dataForm)
			.then(res => {
				if (res.status === 1) {
					dispatch({
						type: typeActions.USER_LOGIN,
						payload: {
							...res.data,
							accessToken: res.accessToken,
						},
					});
				} else {
					console.log(res);
				}
			})
			.catch(err => {
				console.log('Hệ thống đang quá tải', err);
			});
	};

	const handleChange = e => {
		const key = e.target.name;
		setDataForm({ ...dataForm, [key]: e.target.value });
	};

	return (
		<div className="page-login">
			<section className="form">
				<form
					onSubmit={handleSubmit}
					className="form-auth form-login"
					action=""
				>
					<h1 className="title">Đăng nhập</h1>
					<Input
						nameInput="email"
						id="email"
						placeholder="Email đăng nhập"
						onChange={handleChange}
					/>
					<Input
						nameInput="password"
						type="password"
						id="password"
						placeholder="Nhập mật khẩu"
						onChange={handleChange}
					/>
					<div className="group-link">
						<NavLink to="/register" id="btn-register">
							Bạn chưa có tài khoản?
						</NavLink>
						<a href="/#" id="forgot-pass">
							Quên mật khẩu
						</a>
					</div>
					<div className="group-form">
						<button className="btn btn--primary btn-submit btn-login">
							Đăng nhập
						</button>
					</div>
				</form>
			</section>
			<section className="banner"></section>
		</div>
	);
}

export default LoginPage;
