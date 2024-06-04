import React from 'react';
import './TodoContents.css';
import DeleteIcon from '../../assets/Delete-Icon.svg';
import { TodoContentsProps } from './types';

const TodoContents: React.FC<TodoContentsProps> = ({
	text,
	isChecked,
	onCheckChange,
	onDelete,
}) => {
	const handleCheckboxChange = () => {
		onCheckChange(!isChecked);
	};

	const handleDeleteClick = () => {
		onDelete();
	};

	return (
		<div className="TodoLayout">
			<div className="TodoContainer">
				<label className="checkbox_label">
					<input
						type="checkbox"
						checked={isChecked}
						onChange={handleCheckboxChange}
					/>
					<span className="checkbox_icon"></span>
				</label>
				<div className={`checkbox_text ${isChecked ? 'checked' : ''}`}>
					<div>{text}</div>
					<div className="Image_container" onClick={handleDeleteClick}>
						<img src={DeleteIcon} alt="삭제하기" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TodoContents;
