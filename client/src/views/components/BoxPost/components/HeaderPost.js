import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiEarthAsiaOceania } from 'react-icons/gi';
import { HiDotsHorizontal } from 'react-icons/hi';

import { ProtectedComponent } from '../../../../utils/Protected';
import { convertTime, oldTime } from '../../../../utils/convertTime';
import { userAPI } from '../../../../api/userAPI';

function HeaderPost({ email, timeCreate, content }) {
	const [user, setUser] = useState({});
	const [showDate, setShowDate] = useState(false);
	const [timePost, setTimePost] = useState();

	useEffect(() => {
		const time = new Date(timeCreate);
		const timeoutId = setInterval(() => {
			setTimePost(convertTime(time));
		}, 100);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [timeCreate]);

	useEffect(() => {
		userAPI
			.getInfoPublic(email)
			.then(res => {
				setUser({ ...res });
			})
			.catch(err => console.log(err));

		return () => {
			setUser({});
		};
	}, [email]);

	return (
		<div className="box-post-header">
			<div className="info">
				<NavLink
					to={`/${user.slug ? user.slug : user.id}`}
					className="avatar"
				>
					<img src={user.avatar} alt={`avatar ${user.nameUser}`} />
				</NavLink>
				<div className="name-user">
					<NavLink
						to={`/${user.slug ? user.slug : user.id}`}
						className="name"
					>
						{user.nameUser}
					</NavLink>
					<div className="time">
						<span
							onMouseOver={() => setShowDate(true)}
							onMouseLeave={() => setShowDate(false)}
							className="time-post"
						>
							{timePost}
							<ProtectedComponent dependency={showDate}>
								<span className="date-post">
									{oldTime(timeCreate)}
								</span>
							</ProtectedComponent>
						</span>{' '}
						<GiEarthAsiaOceania />
					</div>
				</div>
				<div className="options">
					<div className="options-btn">
						<HiDotsHorizontal />
					</div>
				</div>
			</div>
			<div className="title">{content}</div>
		</div>
	);
}

export default HeaderPost;
