import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import * as typeActions from '../../../actions/type';
import { postAPI } from '../../../api/postAPI';
import { userAPI } from '../../../api/userAPI';

import MainPage from '../../components/Layout/MainPage';
import HeaderUser from './components/HeaderUser';
import FormPost from '../../components/FormPost';
import ListPost from '../../components/Post';
import BlockInfo from './components/BlockInfo';
import BlockPhotos from './components/BlockPhotos';
import BlockFriends from './components/BlockFriends';
import './style/index.scss';

function UserPage() {
	const dispatch = useDispatch();
	const { id } = useParams();

	//if isMe==flase view is other user
	const [isMe, setIsMe] = useState(null);

	//State info of user
	const [user, setUser] = useState({});

	const { dataUser, infoUser } = useSelector(state => state.user);
	const { posts } = useSelector(state => state.posts);

	useEffect(() => {
		window.scrollTo(0, 0);
		document.title = `${user.nameUser} | Novi`;
	}, [user.nameUser]);

	useEffect(() => {
		//call API get posts of user and get info user with slug or id
		Promise.all([postAPI.getPostsMe(id), userAPI.getUser(id)])
			.then(([postsQuery, data]) => {
				//Set info user
				setUser(data.user);

				//Check user page if email === email query
				setIsMe(data.user.id === dataUser.id);

				//Load post of page user
				dispatch({
					type: typeActions.POSTS_LOAD,
					payload: postsQuery.posts,
				});
			})
			.catch(err => console.log('Có lỗi', err));

		return () => {
			dispatch({
				type: typeActions.POSTS_LOAD,
				payload: [],
			});
		};
	}, [id, dispatch, dataUser.id]);

	return (
		<MainPage className="user-page">
			<HeaderUser isMe={isMe} props={isMe ? infoUser : user} />
			<section className="main-user">
				<div className="main-user__control">
					<BlockInfo />
					<BlockPhotos />
					<BlockFriends />
				</div>
				<div className="main-user__posts">
					{isMe && <FormPost props={isMe ? infoUser : user} />}
					<ListPost listPosts={posts} />
				</div>
			</section>
		</MainPage>
	);
}

export default UserPage;
