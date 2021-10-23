import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookMessenger, FaBell } from 'react-icons/fa';
import { CgMenuGridO } from 'react-icons/cg';
import { MdOutlineArrowDropDown } from 'react-icons/md';

function Control({ props }) {
	return (
		<div className="header-control">
			<NavLink
				to={`/${props.slug ? props.slug : props.id}`}
				className="avatar"
			>
				<img src={props.avatar} alt="avatar" />
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
