import React from 'react';
import { useSelector } from 'react-redux';

import WideLayout from '../Layout/WideLayout';
import Control from './components/Control';
import Menu from './components/Menu';
import Logo from './components/Logo';
import Search from './components/Search';

import './style.scss';

function Header() {
	const { infoUser } = useSelector(state => state.user);
	return (
		<header>
			<WideLayout>
				<div className="header">
					<Logo img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" />
					<Search />
					<Menu />
					<Control props={infoUser} />
				</div>
			</WideLayout>
		</header>
	);
}

export default Header;
