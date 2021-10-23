import React from 'react';

function MainPage({ children, className = '' }) {
	return <main className={`main-page ${className}`}>{children}</main>;
}

export default MainPage;
