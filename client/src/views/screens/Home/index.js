import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as typeActions from '../../../actions/type';
import { postAPI } from '../../../api/postAPI';

import MainPage from '../../components/Layout/MainPage';
import FormPost from '../../components/FormPost';
import ListPost from '../../components/Post';
import LeftMenu from '../../components/LeftMenu';
import ListFriendMenu from '../../components/ListFriendMenu';

import './style/index.scss';
function HomePage() {
	const dispatch = useDispatch();
	const { infoUser } = useSelector(state => state.user);
	const { posts } = useSelector(state => state.posts);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		postAPI
			.getAll()
			.then(res => {
				if (res.status === 1) {
					dispatch({
						type: typeActions.POSTS_LOAD,
						payload: res.posts,
					});
				}
			})
			.catch(err => console.log('Có lỗi', err));
	}, [dispatch]);

	return (
		<MainPage>
			<LeftMenu />
			<ListFriendMenu />
			<section className="home-page">
				<FormPost
					text={`${infoUser.firstName} ơi, bạn đang nghĩ gì thế?`}
					props={infoUser}
				/>
				<ListPost listPosts={posts} />
			</section>
		</MainPage>
	);
}

export default HomePage;
