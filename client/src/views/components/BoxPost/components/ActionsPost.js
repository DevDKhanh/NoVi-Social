import React, { useState, useEffect } from 'react';
import { BiComment, BiShare } from 'react-icons/bi';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';

import { postAPI } from '../../../../api/postAPI';
import { meAPI } from '../../../../api/meAPI';

function ActionsPost({ id, setCountReaction, countReaction }) {
	const [isLike, setIsLike] = useState(false);

	const handleLike = () => {
		postAPI
			.handleLike(id)
			.then(res => setCountReaction({ ...countReaction, ...res }))
			.catch(err => console.log('Có lỗi', err));
	};

	useEffect(() => {
		const update = async () => {
			const res = await meAPI.isLike(id);
			setIsLike(res.isLike);
		};
		update();
	}, [countReaction, id]);

	return (
		<div className="box-post-actions">
			<div
				className={`post-action ${isLike && 'active'}`}
				onClick={handleLike}
			>
				<span className="icon">
					{isLike ? <AiFillLike /> : <AiOutlineLike />}
				</span>
				<span className="text">Thích</span>
			</div>
			<div className="post-action">
				<span className="icon">
					<BiComment />
				</span>
				<span className="text">Bình luận</span>
			</div>
			<div className="post-action">
				<span className="icon">
					<BiShare />
				</span>
				<span className="text">Chia sẻ</span>
			</div>
		</div>
	);
}

export default ActionsPost;
