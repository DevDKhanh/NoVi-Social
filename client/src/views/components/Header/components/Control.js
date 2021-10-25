import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookMessenger, FaBell } from 'react-icons/fa';
import { CgMenuGridO } from 'react-icons/cg';
import { MdOutlineArrowDropDown } from 'react-icons/md';

import LoadingPlaceHolder from '../../Effect/LoadingPlaceHolder';

function Control({ props }) {
	const [isLoad, setIsLoad] = useState(true);

	return (
		<div className="header-control">
			<NavLink
				to={`/${props.slug ? props.slug : props.id}`}
				className="avatar-header"
			>
				<div className="avatar">
					<img
						onLoad={() => setIsLoad(false)}
						src={props.avatar}
						alt="avatar"
					/>
					<LoadingPlaceHolder dependency={isLoad} styleLoading="2" />
				</div>
				<div className="text name-user">{props.firstName}</div>
			</NavLink>
			<ul className="list-control">
				<li className="item-control btn-menu">
					<span className="icon">
						<CgMenuGridO />
					</span>
				</li>
				<li className="item-control btn-msg">
					<span className="icon">
						<FaFacebookMessenger />
					</span>
				</li>
				<li className="item-control btn-notify">
					<span className="icon">
						<FaBell />
					</span>
				</li>
				<li className="item-control btn-account">
					<span className="icon">
						<MdOutlineArrowDropDown />
					</span>
				</li>
			</ul>
		</div>
	);
}

export default Control;
