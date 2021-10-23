import React from 'react';
import BoxBlock from '../Layout/BoxBlock';

import HeaderPost from './components/HeaderPost';
import BodyPost from './components/BodyPost';
import InteractPost from './components/InteractPost';
import ActionsPost from './components/ActionsPost';
import './style/style.scss';

function BoxPost({ props }) {
	return (
		<BoxBlock>
			<div className="box-post">
				<HeaderPost
					email={props.email}
					timeCreate={props.createdAt}
					content={props.content}
				/>
				<BodyPost images={props.images} />
				<InteractPost
					countLike={props.countLike}
					countCmt={props.countComment}
					countShare={props.countShare}
				/>
				<ActionsPost id={props._id} />
			</div>
		</BoxBlock>
	);
}

export default BoxPost;
