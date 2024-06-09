import React from 'react';
import FoldIcon from '../../assets/Check-Icon.svg';
import { InputSectionProps } from './types';

const InputSection: React.FC<InputSectionProps> = ({
	inputValue,
	setInputValue,
	addTodo,
	handleToggleAll,
}) => {
	const handlerOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			setTimeout(() => {
				addTodo(inputValue);
				setInputValue('');
			}, 0);
		}
	};

	return (
		<div className="ListLayout">
			<button onClick={handleToggleAll}>
				<img src={FoldIcon} alt="Fold Icon" />
			</button>
			<input
				className="Input-Item"
				type="text"
				value={inputValue}
				onChange={handlerOnchange}
				onKeyDown={handleKeyDown}
				placeholder="What needs to be done?"
			/>
			<button
				id="add-Item"
				onClick={() => {
					addTodo(inputValue);
					setInputValue('');
				}}
			>
				ADD
			</button>
		</div>
	);
};

export default InputSection;
