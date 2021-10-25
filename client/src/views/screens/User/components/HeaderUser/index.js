import React, { useState } from 'react';
import { MdPhotoCamera } from 'react-icons/md';

import { ProtectedComponent } from '../../../../../utils/Protected';
import LoadingPlaceHolder from '../../../../components/Effect/LoadingPlaceHolder';
import NavBarOtherUser from './NavBarOtherUser';
import NavBarMe from './NavBarMe';
import SelectImage from './SelectImage';
import CoverImage from './CoverImage';

function HeaderUser({ props, isMe }) {
	const [showSelectImg, setShowSelectImg] = useState(false);
	const [isLoad, setIsLoad] = useState(true);

	const handleShowFormChangeAvatar = () => {
		setShowSelectImg(!showSelectImg);
	};

	return (
		<div className="header-page-user">
			<div className="header-user">
				<ProtectedComponent dependency={showSelectImg}>
					<SelectImage
						preview={props.avatar}
						onClosed={handleShowFormChangeAvatar}
					/>
				</ProtectedComponent>
				<div className="header-user-background">
					<div className="header-user__img header-user--wide">
						<CoverImage isMe={isMe} srcImg={props.coverImage} />
						<div className="header-user__avatar">
							<div className="avatar">
								<img
									onLoad={() => setIsLoad(false)}
									hidden={isLoad}
									src={props.avatar}
									alt="img avatar"
								/>
							</div>
							<LoadingPlaceHolder
								className="load-avatar"
								styleLoading="2"
								dependency={isLoad}
							/>
							<ProtectedComponent dependency={isMe}>
								<button
									className="btn-change-avatar"
									onClick={handleShowFormChangeAvatar}
								>
									<span className="icon">
										<MdPhotoCamera />
									</span>
								</button>
							</ProtectedComponent>
						</div>
					</div>
				</div>
				<div className="header-user__name">{props.nameUser}</div>
				{isMe !== null ? (
					isMe ? (
						<NavBarMe />
					) : (
						<NavBarOtherUser />
					)
				) : (
					<div className="loading-padding"></div>
				)}
			</div>
		</div>
	);
}
export default HeaderUser;
