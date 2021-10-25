import React, { useState } from 'react';
import { RiImageAddFill } from 'react-icons/ri';
import { FaTimes } from 'react-icons/fa';

function SelectImage({ onClose, setListImage }) {
	const [imgs, setImgs] = useState([]);

	//====< handle select image update preview and formdata >====
	const handleSelectImg = e => {
		for (let i = 0; i < e.target.files.length; i++) {
			const imgConvert = URL.createObjectURL(e.target.files[i]);
			setImgs(prev => [...prev, imgConvert]);
			setListImage(prev => [...prev, e.target.files[i]]);
		}
	};

	//=====< preview image >=====
	const imgPreview = () => {
		return imgs.map((source, index) => {
			if (index <= 2) {
				return (
					<div key={index} className="img-selected">
						<img src={source} alt="" />
						{index === 2 && imgs.length > 3 && (
							<h3 className="count-img">{`${
								imgs.length - 3
							}+`}</h3>
						)}
					</div>
				);
			}
			return null;
		});
	};

	//=====< CSS select img with quantity >=====
	const choiceClass = size => {
		if (size === 2) {
			return 'two';
		} else if (size >= 3) {
			return 'three';
		} else {
			return '';
		}
	};

	return (
		<div className={`${imgs.length > 0 && 'active'} select-images`}>
			<div
				className="btn-close-select"
				onClick={() => {
					setListImage([]);
					onClose();
				}}
			>
				<FaTimes />
			</div>
			<React.Fragment>
				<div className={`select-file ${choiceClass(imgs.length)}`}>
					{imgs.length > 0 && imgPreview()}
					<label
						htmlFor="img-choice"
						className={`img-choice ${imgs.length > 0 && 'active'}`}
					>
						<React.Fragment>
							<RiImageAddFill />
							&nbsp;Thêm ảnh
						</React.Fragment>
					</label>
					<input
						hidden
						type="file"
						name="files"
						id="img-choice"
						multiple
						onChange={handleSelectImg}
					/>
				</div>
			</React.Fragment>
		</div>
	);
}

export default SelectImage;
