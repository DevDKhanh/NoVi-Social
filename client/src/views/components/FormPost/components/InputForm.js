import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTimes, FaImages } from 'react-icons/fa';
import { GiEarthAsiaOceania } from 'react-icons/gi';
import { MdOutlineEmojiEmotions } from 'react-icons/md';

import * as typeActions from '../../../../actions/type';
import { ProtectedComponent } from '../../../../utils/Protected';
import SelectImage from './SelectImage';
import { postAPI } from '../../../../api/postAPI';

function InputForm({ props }) {
	const dispatch = useDispatch();
	const { isShowSelectImg } = useSelector(state => state.site);
	const [content, setContent] = useState('');
	const [listImage, setListImage] = useState([]);

	const handleCloseForm = () => {
		dispatch({ type: typeActions.SITE_TOGGLE_FORM, payload: false });
		dispatch({ type: typeActions.SITE_TOGGLE_IMG, payload: false });
	};

	const handleToggleSelectImg = toggle => {
		dispatch({
			type: typeActions.SITE_TOGGLE_IMG,
			payload: toggle,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (content.trim() !== '' || listImage.length > 0) {
			const formData = new FormData();
			formData.append('content', content);
			for (let i in listImage) {
				formData.append('files', listImage[i]);
			}
			postAPI
				.post(formData)
				.then(res => {
					if (res.status === 1) {
						handleCloseForm();
						dispatch({
							type: typeActions.POSTS_NEW_POST,
							payload: res.post,
						});
					} else {
						console.log(res.message_vn);
					}
				})
				.catch(err => console.log('Có lỗi đã xảy ra', err));
		}
	};

	return (
		<React.Fragment>
			<div className="overlay" onClick={handleCloseForm}></div>
			<div className="form-post-main">
				<form onSubmit={handleSubmit} action="">
					<div className="form-post-main__header">
						<div className="title">
							<h4>Tạo bài viết</h4>
							<div
								className="btn-close"
								onClick={handleCloseForm}
							>
								<FaTimes />
							</div>
						</div>
						<div className="info">
							<div className="avatar">
								<img src={props.avatar} alt="avatar" />
							</div>
							<div className="text">
								<div>{props.nameUser}</div>
								<div className="status-select">
									<GiEarthAsiaOceania />{' '}
									<span className="name-select">
										Công khai
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="form-post-main__input">
						<textarea
							name="content"
							id="content"
							onChange={e => setContent(e.target.value)}
							placeholder={`${props.firstName} ơi, bạn đang nghĩ gì?`}
						></textarea>
						<ProtectedComponent dependency={isShowSelectImg}>
							<SelectImage
								onClose={() => handleToggleSelectImg(false)}
								setListImage={setListImage}
							/>
						</ProtectedComponent>
					</div>
					<div className="form-post-main__actions">
						<div className="text-des">Thêm vào bài viết</div>
						<div className="list-actions">
							<div
								className="item"
								onClick={() => handleToggleSelectImg(true)}
							>
								<div className="icon text--primary">
									<FaImages />
								</div>
								<span className="text">Ảnh</span>
							</div>
							<div className="item">
								<div className="icon text--danger">
									<MdOutlineEmojiEmotions />
								</div>
								<span className="text">Cảm xúc/Hoạt động</span>
							</div>
						</div>
					</div>
					<div className="form-post-main__buttons">
						<button
							className={`btn ${
								(content.trim() !== '' ||
									listImage.length > 0) &&
								'active'
							}`}
						>
							Đăng
						</button>
					</div>
				</form>
			</div>
		</React.Fragment>
	);
}

export default InputForm;
