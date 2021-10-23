import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdPersonSearch, MdGroups } from 'react-icons/md';
import { AiFillFire } from 'react-icons/ai';

import './style.scss';

function LeftMenu() {
	const { infoUser } = useSelector(state => state.user);

	return (
		<section className="left-menu">
			<NavLink
				to={`/${infoUser.slug ? infoUser.slug : infoUser.id}`}
				className="left-menu__item"
			>
				<div className="avatar">
					<img src={infoUser.avatar} alt="avatar" />
				</div>
				<div className="text">{infoUser.nameUser}</div>
			</NavLink>
			<div className="left-menu__item">
				<div className="icon">
					<AiFillFire />
				</div>
				<div className="text">Khám phá</div>
			</div>
			<div className="left-menu__item">
				<div className="icon">
					<MdPersonSearch />
				</div>
				<div className="text">Tìm bạn bè</div>
			</div>
			<div className="left-menu__item">
				<div className="icon">
					<MdGroups />
				</div>
				<div className="text">Nhóm</div>
			</div>
		</section>
	);
}

export default LeftMenu;
