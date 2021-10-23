import React from 'react';
import { BiComment, BiShare } from 'react-icons/bi';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { postAPI } from '../../../../api/postAPI';

function ActionsPost({ id }) {
	const handleLike = () => {
		postAPI
			.handleLike(id)
			.then(res => console.log(res))
			.catch(err => console.log('Có lỗi', err));
	};

	return (
		<div className="box-post-actions">
			<div className="post-action active" onClick={handleLike}>
				<span className="icon">
					<AiOutlineLike />
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
