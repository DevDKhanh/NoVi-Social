import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as typeActions from '../../../../actions/type';
import { ProtectedComponent } from '../../../../utils/Protected';
import LoadingPlaceHolder from '../../Effect/LoadingPlaceHolder';
import InputForm from './InputForm';

function Form({ text = 'Bạn đang nghĩ gì?', props }) {
	const dispatch = useDispatch();
	const [isLoad, setIsLoad] = useState(true);
	const { isShowForm } = useSelector(state => state.site);

	//=====< open form add new post >=====
	const handleOpenForm = () => {
		dispatch({
			type: typeActions.SITE_TOGGLE_FORM,
			payload: true,
		});
	};

	return (
		<React.Fragment>
			<div className="form-post__form">
				<div className="avatar">
					<img
						onLoad={() => setIsLoad(false)}
						src={props.avatar}
						alt="avatar"
					/>
					<LoadingPlaceHolder dependency={isLoad} />
				</div>
				<div className="btn-show-post" onClick={handleOpenForm}>
					<p>{text}</p>
				</div>
			</div>
			<ProtectedComponent dependency={isShowForm}>
				<InputForm props={props} />
			</ProtectedComponent>
		</React.Fragment>
	);
}

export default Form;
