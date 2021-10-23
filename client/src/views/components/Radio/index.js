import React from 'react';

import './style.scss';

function Gender({ nameInput, list, className, onChange }) {
	return (
		<div className={`input-radio ${className}`}>
			{list.map((data, index) => (
				<label
					key={index}
					className="input-radio__element"
					htmlFor={data.value}
				>
					<span>{data.label}</span>
					<input
						type="radio"
						name={nameInput}
						id={data.value}
						value={data.value}
						onChange={onChange}
					/>
				</label>
			))}
		</div>
	);
}

export default Gender;
