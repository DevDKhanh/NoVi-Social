import React from 'react';
import { FaSearch } from 'react-icons/fa';

import './style.scss';

function ListFriendMenu() {
	return (
		<section className="list-friend-menu">
			<h2 className="title">Danh sách bạn bè</h2>
			<form className="from-search" action="#">
				<button className="button-seach">
					<FaSearch />
				</button>
				<input type="text" placeholder="Tìm kiếm trong danh sách" />
			</form>
			<div id="list">
				<div className="list-friend-menu__item">
					<div className="avatar">
						<span className="status status--online"></span>
						<img
							src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/169121906_1673758642825329_1633927339019676240_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dfye_knZQYEAX_QL_yO&_nc_ht=scontent.fhan4-1.fna&oh=aa736df1035a5cd2bd58ebfed6c1d8ac&oe=61807D26"
							alt="avatar"
						/>
					</div>
					<div className="text">Duy Khánh</div>
				</div>
				<div className="list-friend-menu__item online">
					<div className="avatar">
						<span className="status"></span>
						<img
							src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/169121906_1673758642825329_1633927339019676240_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dfye_knZQYEAX_QL_yO&_nc_ht=scontent.fhan4-1.fna&oh=aa736df1035a5cd2bd58ebfed6c1d8ac&oe=61807D26"
							alt="avatar"
						/>
					</div>
					<div className="text">Duy Khánh</div>
				</div>
				<div className="list-friend-menu__item online">
					<div className="avatar">
						<span className="status"></span>
						<img
							src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/169121906_1673758642825329_1633927339019676240_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dfye_knZQYEAX_QL_yO&_nc_ht=scontent.fhan4-1.fna&oh=aa736df1035a5cd2bd58ebfed6c1d8ac&oe=61807D26"
							alt="avatar"
						/>
					</div>
					<div className="text">Duy Khánh</div>
				</div>
				<div className="list-friend-menu__item">
					<div className="avatar">
						<span className="status"></span>
						<img
							src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/169121906_1673758642825329_1633927339019676240_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dfye_knZQYEAX_QL_yO&_nc_ht=scontent.fhan4-1.fna&oh=aa736df1035a5cd2bd58ebfed6c1d8ac&oe=61807D26"
							alt="avatar"
						/>
					</div>
					<div className="text">Duy Khánh</div>
				</div>
				<div className="list-friend-menu__item">
					<div className="avatar">
						<span className="status"></span>
						<img
							src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/169121906_1673758642825329_1633927339019676240_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dfye_knZQYEAX_QL_yO&_nc_ht=scontent.fhan4-1.fna&oh=aa736df1035a5cd2bd58ebfed6c1d8ac&oe=61807D26"
							alt="avatar"
						/>
					</div>
					<div className="text">Duy Khánh</div>
				</div>
				<div className="list-friend-menu__item online">
					<div className="avatar">
						<span className="status"></span>
						<img
							src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/169121906_1673758642825329_1633927339019676240_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dfye_knZQYEAX_QL_yO&_nc_ht=scontent.fhan4-1.fna&oh=aa736df1035a5cd2bd58ebfed6c1d8ac&oe=61807D26"
							alt="avatar"
						/>
					</div>
					<div className="text">Duy Khánh</div>
				</div>
				<div className="list-friend-menu__item online">
					<div className="avatar">
						<span className="status"></span>
						<img
							src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/169121906_1673758642825329_1633927339019676240_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dfye_knZQYEAX_QL_yO&_nc_ht=scontent.fhan4-1.fna&oh=aa736df1035a5cd2bd58ebfed6c1d8ac&oe=61807D26"
							alt="avatar"
						/>
					</div>
					<div className="text">Duy Khánh</div>
				</div>
				<div className="list-friend-menu__item">
					<div className="avatar">
						<span className="status"></span>
						<img
							src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/169121906_1673758642825329_1633927339019676240_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dfye_knZQYEAX_QL_yO&_nc_ht=scontent.fhan4-1.fna&oh=aa736df1035a5cd2bd58ebfed6c1d8ac&oe=61807D26"
							alt="avatar"
						/>
					</div>
					<div className="text">Duy Khánh</div>
				</div>
				<div className="list-friend-menu__item">
					<div className="avatar">
						<span className="status"></span>
						<img
							src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/169121906_1673758642825329_1633927339019676240_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dfye_knZQYEAX_QL_yO&_nc_ht=scontent.fhan4-1.fna&oh=aa736df1035a5cd2bd58ebfed6c1d8ac&oe=61807D26"
							alt="avatar"
						/>
					</div>
					<div className="text">Duy Khánh</div>
				</div>
				<div className="list-friend-menu__item">
					<div className="avatar">
						<span className="status"></span>
						<img
							src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/169121906_1673758642825329_1633927339019676240_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dfye_knZQYEAX_QL_yO&_nc_ht=scontent.fhan4-1.fna&oh=aa736df1035a5cd2bd58ebfed6c1d8ac&oe=61807D26"
							alt="avatar"
						/>
					</div>
					<div className="text">Duy Khánh</div>
				</div>
				<div className="list-friend-menu__item">
					<div className="avatar">
						<span className="status"></span>
						<img
							src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/169121906_1673758642825329_1633927339019676240_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dfye_knZQYEAX_QL_yO&_nc_ht=scontent.fhan4-1.fna&oh=aa736df1035a5cd2bd58ebfed6c1d8ac&oe=61807D26"
							alt="avatar"
						/>
					</div>
					<div className="text">Duy Khánh</div>
				</div>
				<div className="list-friend-menu__item">
					<div className="avatar">
						<span className="status"></span>
						<img
							src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/169121906_1673758642825329_1633927339019676240_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dfye_knZQYEAX_QL_yO&_nc_ht=scontent.fhan4-1.fna&oh=aa736df1035a5cd2bd58ebfed6c1d8ac&oe=61807D26"
							alt="avatar"
						/>
					</div>
					<div className="text">Duy Khánh</div>
				</div>
				<div className="list-friend-menu__item">
					<div className="avatar">
						<span className="status"></span>
						<img
							src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/169121906_1673758642825329_1633927339019676240_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dfye_knZQYEAX_QL_yO&_nc_ht=scontent.fhan4-1.fna&oh=aa736df1035a5cd2bd58ebfed6c1d8ac&oe=61807D26"
							alt="avatar"
						/>
					</div>
					<div className="text">Duy Khánh</div>
				</div>
			</div>
		</section>
	);
}

export default ListFriendMenu;
