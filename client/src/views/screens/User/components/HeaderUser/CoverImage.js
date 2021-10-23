import React, { useState, useEffect } from 'react';
import { MdPhotoCamera } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import * as typeActions from '../../../../../actions/type';
import { meAPI } from '../../../../../api/meAPI';
import { ProtectedComponent } from '../../../../../utils/Protected';

function CoverImage({ isMe, srcImg }) {
	const dispatch = useDispatch();
	const [coverImage, setCoverImage] = useState(null);
	const [fileImg, setFileImg] = useState(null);

	const handleSelectImage = e => {
		const file = e.target.files[0];

		if (file) {
			setCoverImage(URL.createObjectURL(file));
			setFileImg(file);
		}
	};

	const handleChangeCoverImage = () => {
		const formData = new FormData();
		formData.append('file', fileImg);
		meAPI
			.updateCoverImage(formData)
			.then(res => {
				setFileImg(null);
				dispatch({
					type: typeActions.USER_UPDATE_INFO,
					payload: { ...res },
				});
			})
			.catch(err => console.log('Có lỗi xảy ra', err));
	};

	const cancelChange = () => {
		setCoverImage(null);
		setFileImg(null);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [fileImg]);

	return (
		<React.Fragment>
			<ProtectedComponent dependency={fileImg}>
				<section className="actions-coverimg">
					<h4>Ảnh bìa của bạn sẽ hiển thị công khai</h4>
					<div className="btn-group">
						<button
							className="btn btn--glasses"
							onClick={cancelChange}
						>
							Hủy
						</button>
						<button
							className="btn btn--primary"
							onClick={handleChangeCoverImage}
						>
							Lưu thay đổi
						</button>
					</div>
				</section>
			</ProtectedComponent>
			<ProtectedComponent dependency={isMe}>
				<label
					htmlFor="file-img-cover"
					className="btn-change-cover-img"
				>
					<span className="icon">
						<MdPhotoCamera />
					</span>{' '}
					<h5>Chỉnh sửa ảnh bìa</h5>
					<input
						hidden
						type="file"
						name="img-cover"
						id="file-img-cover"
						onChange={handleSelectImage}
					/>
				</label>
			</ProtectedComponent>
			<img src={coverImage || srcImg} alt="cover-img" />
		</React.Fragment>
	);
}

export default CoverImage;
