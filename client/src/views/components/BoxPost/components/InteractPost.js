import React from 'react';
import { ReactComponent as LikeIcon } from '../../../../assets/images/like.svg';

import { ProtectedComponent } from '../../../../utils/Protected';

function InteractPost({ countReaction }) {
	return (
		<div className="box-post-interact">
			<div className="count-like">
				<ProtectedComponent dependency={countReaction.like > 0}>
					<span className="icon">
						<LikeIcon />
					</span>
					<span className="num">{countReaction.like}</span>
				</ProtectedComponent>
			</div>
			<div className="count-other">
				<ProtectedComponent dependency={countReaction.cmt > 0}>
					<div className="count-item">
						{countReaction.cmt} bình luận
					</div>
				</ProtectedComponent>
				<ProtectedComponent dependency={countReaction.share > 0}>
					<div className="count-item">
						{countReaction.share} chia sẻ
					</div>
				</ProtectedComponent>
			</div>
		</div>
	);
}

export default InteractPost;
