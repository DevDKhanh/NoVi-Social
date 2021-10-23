import React from 'react';

import BoxPost from '../BoxPost';
import './style.scss';

function ListPost({ listPosts = [] }) {
	return (
		<div className="list-post">
			{listPosts.map(post => {
				return <BoxPost key={post._id} props={post} />;
			})}
		</div>
	);
}

export default ListPost;
