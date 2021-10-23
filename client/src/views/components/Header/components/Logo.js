import React from 'react';

function Logo({ img }) {
	return (
		<div className="header-logo">
			<div className="logo">
				<img src={img} alt="logo" />
			</div>
		</div>
	);
}

export default Logo;
