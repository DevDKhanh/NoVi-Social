import React from 'react';

import { ProtectedComponent } from '../../../../utils/Protected';

function BodyPost({ images }) {
	const choiceClass = size => {
		if (size === 2) {
			return 'two mutil-img';
		} else if (size >= 3) {
			return 'three mutil-img';
		} else {
			return '';
		}
	};

	return (
		<ProtectedComponent dependency={images}>
			<div className={`box-post-body ${choiceClass(images.length)}`}>
				{images.map((image, index) => {
					if (index <= 2) {
						return (
							<span key={index} className="img-post">
								<img src={image} alt={image} />
								{index === 2 && images.length > 3 && (
									<h3 className="count-img">{`${
										images.length - 3
									}+`}</h3>
								)}
							</span>
						);
					}
					return null;
				})}
			</div>
		</ProtectedComponent>
	);
}

export default BodyPost;
