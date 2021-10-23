import React from 'react';
import { useParams } from 'react-router';

import { NavLink } from 'react-router-dom';
import { FaFacebookMessenger, FaUserPlus } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';

function NavBarOtherUser() {
	const { id } = useParams();

	return (
		<nav className="header-user__menu header-user--wide">
			<div className="menu-links">
				<NavLink to={`/${id}`} exact className="menu-links__item">
					Bài viết
				</NavLink>
				<NavLink to={`/${id}/about`} exact className="menu-links__item">
					Giới thiệu
				</NavLink>
				<NavLink
					to={`/${id}/friends`}
					exact
					className="menu-links__item"
				>
					Bạn bè <span className="num">460</span>
				</NavLink>
				<NavLink
					to={`/${id}/photos`}
					exact
					className="menu-links__item"
				>
					Ảnh
				</NavLink>
			</div>
			<div className="menu-actions">
				<button className="btn btn-user-action btn--primary">
					<FaUserPlus />
					Thêm bạn bè
				</button>
				<button className="btn btn-user-action btn--gray-color-2">
					<FaFacebookMessenger />
					Nhắn tin
				</button>
				<button className="btn btn-user-action btn--gray-color-2">
					<BsThreeDots />
				</button>
			</div>
		</nav>
	);
}

export default NavBarOtherUser;
