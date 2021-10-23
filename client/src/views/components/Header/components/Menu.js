import React from 'react';
import { NavLink } from 'react-router-dom';

import { AiFillHome } from 'react-icons/ai';
import { MdOndemandVideo, MdOutlineSupervisedUserCircle } from 'react-icons/md';

function Menu() {
	return (
		<div className="header-menu">
			<ul className="menu">
				<NavLink to="/" exact className="menu-item">
					<span className="icon">
						<AiFillHome />
					</span>
				</NavLink>
				<NavLink to="/video" exact className="menu-item">
					<span className="icon">
						<MdOndemandVideo />
					</span>
				</NavLink>
				<NavLink to="/friends" exact className="menu-item">
					<span className="icon">
						<MdOutlineSupervisedUserCircle />
					</span>
				</NavLink>
			</ul>
		</div>
	);
}

export default Menu;
