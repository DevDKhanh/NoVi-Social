import React from 'react';
import { FaSearch } from 'react-icons/fa';

function Search() {
	return (
		<div className="header-search">
			<form className="from-search" action="#">
				<div className="group-search">
					<button className="button-seach">
						<FaSearch />
					</button>
					<input type="text" placeholder="Tìm kiếm trên Facebook" />
				</div>
			</form>
		</div>
	);
}

export default Search;
