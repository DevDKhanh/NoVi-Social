import React, { useState, useEffect } from 'react';
import BoxBlock from '../Layout/BoxBlock';

import { postAPI } from '../../../api/postAPI';
import HeaderPost from './components/HeaderPost';
import BodyPost from './components/BodyPost';
import InteractPost from './components/InteractPost';
import ActionsPost from './components/ActionsPost';
import './style/style.scss';

function BoxPost({ props, children }) {
	const [countReaction, setCountReaction] = useState({});
	const [showComment, setShowComment] = useState(false);

	useEffect(() => {
		const countReaction = async () => {
			try {
				const count = await postAPI.getReactionCount(props._id);
				setCountReaction(count);
			} catch (err) {
				console.log(err);
			}
		};
		countReaction();
		return () => setCountReaction({});
	}, [props._id]);

	return (
		<BoxBlock>
			<div className="box-post">
				<HeaderPost
					idUser={props.idUser}
					timeCreate={props.createdAt}
					content={props.content}
				/>
				<BodyPost images={props.images} />
				<InteractPost countReaction={countReaction} />
				<ActionsPost
					id={props._id}
					setCountReaction={setCountReaction}
					countReaction={countReaction}
					setShowComment={setShowComment}
				/>
				{showComment && children}
			</div>
		</BoxBlock>
	);
}

export default BoxPost;
