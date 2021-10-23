import React from 'react';

function BoxBlock({ children, className = '' }) {
	return <div className={`box-block ${className}`}>{children}</div>;
}

export default BoxBlock;
