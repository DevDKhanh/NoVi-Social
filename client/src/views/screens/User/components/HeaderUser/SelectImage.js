import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdUpload } from 'react-icons/md';
import { FaTimesCircle } from 'react-icons/fa';

import * as typeActions from '../../../../../actions/type';
import { meAPI } from '../../../../../api/meAPI';
import BoxBlock from '../../../../components/Layout/BoxBlock';

function SelectImage({ preview, onClosed }) {
	const dispatch = useDispatch();
	const [avatar, setAvatar] = useState(preview);
	const [fileImg, setFileImg] = useState(null);
	const [readyUpdate, setReadyUpdate] = useState(false);

	const handleSelectImage = e => {
		const file = e.target.files[0];
		setAvatar(URL.createObjectURL(file));
		setFileImg(file);
	};

	const handleChangeAvatar = () => {
		if (readyUpdate) {
			const formData = new FormData();
			formData.append('file', fileImg);
			meAPI
				.updateAvatar(formData)
				.then(res => {
					if (res.status === 1) {
						onClosed();
						dispatch({
							type: typeActions.USER_UPDATE_INFO,
							payload: { ...res },
						});
					}
				})
				.catch(err => console.log('Có lỗi', err));
		}
	};

	useEffect(() => {
		if (fileImg) {
			setReadyUpdate(true);
		}
	}, [fileImg]);

	return (
		<React.Fragment>
			<div className="overlay" onClick={onClosed}></div>
			<BoxBlock className="form-select">
				<h3>Cập nhật ảnh đại diện</h3>
				<div className="btn--close" onClick={onClosed}>
					<FaTimesCircle />
				</div>
				<input
					hidden
					type="file"
					name="avatar"
					id="file-img"
					onChange={handleSelectImage}
				/>
				<div className="preview-avatar">
					{avatar && <img src={avatar} alt="avatar selected" />}
					<label className="btn-select" htmlFor="file-img">
						Tải ảnh lên{' '}
						<span className="icon">
							<MdUpload />
						</span>
					</label>
				</div>
				<button
					className={`btn ${
						readyUpdate ? 'btn--primary' : 'btn--no-drop'
					}`}
					onClick={handleChangeAvatar}
				>
					Cập nhật
				</button>
			</BoxBlock>
		</React.Fragment>
	);
}

export default SelectImage;
