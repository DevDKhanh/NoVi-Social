import React from 'react';

import FormComment from '../FormComment';
import BoxPost from '../BoxPost';
import './style.scss';

function ListPost({ listPosts = [] }) {
	return (
		<div className="list-post">
			{listPosts.map(post => {
				return (
					<BoxPost key={post._id} props={post}>
						<FormComment placeHolder="Viết bình luận..." />
					</BoxPost>
				);
			})}
		</div>
	);
}

export default ListPost;
