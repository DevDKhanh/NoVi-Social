import React from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { AiFillPlusCircle } from 'react-icons/ai';
import { RiPencilFill } from 'react-icons/ri';
import { BsThreeDots } from 'react-icons/bs';

function NavBarMe() {
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
					<AiFillPlusCircle />
					Thêm vào tin
				</button>
				<button className="btn btn-user-action btn--gray-color-2">
					<RiPencilFill />
					Chỉnh sửa trang cá nhân
				</button>
				<button className="btn btn-user-action btn--gray-color-2">
					<BsThreeDots />
				</button>
			</div>
		</nav>
	);
}

export default NavBarMe;
