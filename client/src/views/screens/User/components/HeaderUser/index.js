import React, { useState } from 'react';
import { MdPhotoCamera } from 'react-icons/md';

import { ProtectedComponent } from '../../../../../utils/Protected';
import NavBarMe from './NavBarMe';
import NavBarOtherUser from './NavBarOtherUser';
import SelectImage from './SelectImage';
import CoverImage from './CoverImage';

function HeaderUser({ props, isMe }) {
	const [showSelectImg, setShowSelectImg] = useState(false);

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
							<img src={props.avatar} alt="img avatar" />
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
				{isMe ? <NavBarMe /> : <NavBarOtherUser />}
			</div>
		</div>
	);
}
export default HeaderUser;
