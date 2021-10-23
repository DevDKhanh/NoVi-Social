import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaAngleDoubleLeft } from 'react-icons/fa';

import * as typeActions from '../../../actions/type';
import { authAPI } from '../../../api/authAPI';
import InputDate from '../../components/InputDate';
import Input from './components/Input';
import Radio from '../../components/Radio';
import './style/index.scss';

function RegisterPage() {
	const date = new Date();

	const dispatch = useDispatch();

	const [dataForm, setDataForm] = useState({
		email: '',
		firstname: '',
		lastname: '',
		day: `${date.getDate()}`,
		month: `${date.getMonth() + 1}`,
		year: `${date.getFullYear()}`,
		password: '',
		gender: '',
	});

	const handleSubmit = e => {
		e.preventDefault();
		authAPI
			.register(dataForm)
			.then(res => {
				if (res.status === 1) {
					dispatch({
						type: typeActions.USER_REGISTER,
						payload: {
							...res.data,
							accessToken: res.accessToken,
						},
					});
				} else {
					console.log(res.message_vn);
				}
			})
			.catch(err => console.log('Có lỗi'));
	};

	const handleChange = e => {
		const key = e.target.name;
		setDataForm({ ...dataForm, [key]: e.target.value });
	};

	const listRadio = [
		{
			value: 'male',
			label: 'Nam',
		},
		{
			value: 'fmale',
			label: 'Nữ',
		},
		{
			value: 'other',
			label: 'Khác',
		},
	];

	return (
		<div className="page-login">
			<section className="form">
				<NavLink id="link-login" to="/login">
					<FaAngleDoubleLeft /> Đăng nhập
				</NavLink>
				<form
					onSubmit={handleSubmit}
					className="form-auth form-login"
					action=""
				>
					<h1 className="title">Đăng ký</h1>
					<Input
						nameInput="email"
						id="email"
						placeholder="Nhập email"
						onChange={handleChange}
					/>
					<div className="group-inline">
						<Input
							nameInput="lastname"
							id="lastname"
							placeholder="Họ"
							onChange={handleChange}
						/>
						<Input
							nameInput="firstname"
							id="firstname"
							placeholder="Tên"
							onChange={handleChange}
						/>
					</div>
					<div className="group-form">
						<InputDate onChange={handleChange} />
					</div>
					<Radio
						list={listRadio}
						nameInput="gender"
						onChange={handleChange}
					/>
					<Input
						id="password"
						nameInput="password"
						type="password"
						placeholder="Mật khẩu mới"
						onChange={handleChange}
					/>
					<div className="group-form">
						<button className="btn btn--primary btn-submit btn-login">
							Đăng ký
						</button>
					</div>
				</form>
			</section>
			<section className="banner"></section>
		</div>
	);
}

export default RegisterPage;
