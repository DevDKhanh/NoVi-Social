import React from 'react';
import * as typeActions from '../../../../actions/type';
import { useDispatch } from 'react-redux';
import { FaImages } from 'react-icons/fa';
import { MdOutlineEmojiEmotions } from 'react-icons/md';

function ActionForm() {
	const dispatch = useDispatch();

	//=====< Open form and open select image >=====
	const handleOpenForm = () => {
		dispatch({
			type: typeActions.SITE_TOGGLE_IMG,
			payload: true,
		});
		dispatch({
			type: typeActions.SITE_TOGGLE_FORM,
			payload: true,
		});
	};

	return (
		<div className="form-post__actions">
			<div className="btn post-action" onClick={handleOpenForm}>
				<span className="icon text--primary">
					<FaImages />
				</span>
				<span className="text">Ảnh/Video</span>
			</div>
			<div className="btn post-action">
				<span className="icon text--danger">
					<MdOutlineEmojiEmotions />
				</span>
				<span className="text">Cảm xúc/Hoạt động</span>
			</div>
		</div>
	);
}

export default ActionForm;
