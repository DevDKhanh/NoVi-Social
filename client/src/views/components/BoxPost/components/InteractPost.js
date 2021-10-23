import React from 'react';
import { AiFillLike } from 'react-icons/ai';

import { ProtectedComponent } from '../../../../utils/Protected';

function InteractPost({ countLike, countCmt, countShare }) {
	return (
		<div className="box-post-interact">
			<div className="count-like">
				<ProtectedComponent dependency={countLike > 0}>
					<span className="icon">
						<AiFillLike />
					</span>
					<span className="num">{countLike}</span>
				</ProtectedComponent>
			</div>
			<div className="count-other">
				<ProtectedComponent dependency={countCmt > 0}>
					<div className="count-item">{countCmt} bình luận</div>
				</ProtectedComponent>
				<ProtectedComponent dependency={countShare > 0}>
					<div className="count-item">{countShare} chia sẻ</div>
				</ProtectedComponent>
			</div>
		</div>
	);
}

export default InteractPost;
