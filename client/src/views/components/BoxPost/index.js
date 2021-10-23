import React, { useState, useEffect } from 'react';
import BoxBlock from '../Layout/BoxBlock';

import { postAPI } from '../../../api/postAPI';
import HeaderPost from './components/HeaderPost';
import BodyPost from './components/BodyPost';
import InteractPost from './components/InteractPost';
import ActionsPost from './components/ActionsPost';
import './style/style.scss';

function BoxPost({ props }) {
	const [countReaction, setCountReaction] = useState({});

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
	}, [props.email, props._id]);

	return (
		<BoxBlock>
			<div className="box-post">
				<HeaderPost
					email={props.email}
					timeCreate={props.createdAt}
					content={props.content}
				/>
				<BodyPost images={props.images} />
				<InteractPost countReaction={countReaction} />
				<ActionsPost
					id={props._id}
					setCountReaction={setCountReaction}
					countReaction={countReaction}
				/>
			</div>
		</BoxBlock>
	);
}

export default BoxPost;
