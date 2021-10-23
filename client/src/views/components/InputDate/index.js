import React, { useState, useEffect } from 'react';

import './style.scss';

function InputDate({ onChange }) {
	const dateTime = new Date();

	let day = dateTime.getDate();
	let month = dateTime.getMonth() + 1;
	let year = dateTime.getFullYear();

	let dayInput = [];
	let monthInput = [];
	let yearInput = [];
	const [dayChoice, setDayChoice] = useState(day);
	const [monthChoice, setMonthChoice] = useState(month);
	const [yearChoice, setYearChoice] = useState(year);
	const [dayLoop, setDayLoop] = useState(day);
	const [monthLoop, setMonthLoop] = useState(month);
	const [yearLoop] = useState(year);

	const pushIndex = (arr, start, end) => {
		for (let i = start; i <= end; i++) {
			arr.unshift(i);
		}
	};
	const leapYear = year => {
		if (
			(year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
			(year % 100 === 0 && year % 400 === 0)
		)
			return true;
		else return false;
	};
	const handleChange = e => {
		const key = e.target.name;
		if (key === 'day') {
			setDayChoice(Number(e.target.value));
		} else if (key === 'month') {
			setMonthChoice(Number(e.target.value));
		} else if (key === 'year') {
			setYearChoice(Number(e.target.value));
		}
		onChange(e);
	};

	useEffect(() => {
		if (yearChoice < year) {
			setMonthLoop(12);
		} else {
			setMonthLoop(month);
		}
	}, [yearChoice, year, month]);
	useEffect(() => {
		pushIndex(monthInput, 1, monthLoop);
	});

	useEffect(() => {
		if (yearChoice < year) {
			if ([1, 3, 5, 7, 8, 10, 12].includes(monthChoice)) {
				setDayLoop(31);
			} else if (monthChoice === 2) {
				leapYear(yearChoice) ? setDayLoop(29) : setDayLoop(28);
			} else {
				setDayLoop(30);
			}
		} else {
			if (monthChoice < month) {
				if ([1, 3, 5, 7, 8, 10, 12].includes(monthChoice)) {
					setDayLoop(31);
				} else if (monthChoice === 2) {
					leapYear(yearChoice) ? setDayLoop(29) : setDayLoop(28);
				} else {
					setDayLoop(30);
				}
			} else {
				setDayLoop(day);
			}
		}
	}, [yearChoice, year, monthChoice, month, day, dayChoice]);
	useEffect(() => {
		pushIndex(dayInput, 1, dayLoop);
	});

	pushIndex(dayInput, 1, dayLoop);
	pushIndex(monthInput, 1, monthLoop);
	pushIndex(yearInput, year - 150, yearLoop);

	return (
		<div className="input-date">
			<select
				className="input-date__elements"
				name="year"
				id="year"
				onChange={handleChange}
				defaultValue={year}
			>
				{yearInput.map(v => (
					<option key={v} value={v}>
						{v}
					</option>
				))}
			</select>
			<select
				className="input-date__elements"
				name="month"
				id="month"
				onChange={handleChange}
				defaultValue={month}
			>
				{monthInput.map(v => (
					<option key={v} value={v}>
						Tháng {v}
					</option>
				))}
			</select>
			<select
				className="input-date__elements"
				name="day"
				id="day"
				onChange={handleChange}
				defaultValue={day}
			>
				{dayInput.map(v => (
					<option key={v} value={v}>
						{v}
					</option>
				))}
			</select>
		</div>
	);
}

export default InputDate;
