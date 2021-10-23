import React, { useState } from 'react';

import BoxBlock from '../Layout/BoxBlock';
import Form from './components/Form';
import ActionForm from './components/ActionForm';
import './style.scss';

function FormPost({ text, props }) {
	const [show, setShow] = useState(false);

	const handleShowForm = () => {
		setShow(!show);
	};

	return (
		<BoxBlock>
			<div className="form-post">
				<Form
					text={text}
					props={props}
					handleShowForm={handleShowForm}
				/>
				<ActionForm />
			</div>
		</BoxBlock>
	);
}

export default FormPost;
