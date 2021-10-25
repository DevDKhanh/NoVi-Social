import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import ContentEditable from 'react-contenteditable';

import {
	trimSpaces,
	pasteAsPlainText,
	disableNewlines,
} from '../../../utils/handleContentEditable';
import './style/style.scss';

function FormComment({ placeHolder, className = '' }) {
	const { infoUser } = useSelector(state => state.user);
	const inputRef = useRef(null);
	const [subMit, setSubMit] = useState(false);
	const [content, setContent] = useState('');

	const handleEnter = e => {
		const keyCode = e.keyCode || e.which;
		keyCode === 13 && setSubMit(true);
		disableNewlines(e);
	};

	useEffect(() => {
		inputRef.current.focus();
	}, [inputRef]);

	useEffect(() => {
		if (subMit) {
			if (trimSpaces(content).trim() !== '') {
				console.log(trimSpaces(content));
				setContent('');
				setSubMit(false);
			}
		}
	}, [subMit, content]);

	return (
		<div className={`form-comment ${className}`}>
			<div className="avatar">
				<img src={infoUser.avatar} alt={infoUser.lastName} />
			</div>
			<form>
				<ContentEditable
					onPaste={pasteAsPlainText}
					onKeyPress={handleEnter}
					html={content}
					role="textbox"
					className="form-comment"
					innerRef={inputRef}
					onChange={e => setContent(e.target.value)}
					disabled={false}
					placeholder={placeHolder}
					tagName="div"
				/>
			</form>
		</div>
	);
}

export default FormComment;
