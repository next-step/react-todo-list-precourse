import FoldIcon from '../../assets/Check-Icon.svg';
import TodoContents from '../todo-list/TodoContents';
import './ListContents.css';

const ListContents = () => {
	return (
		<>
			<div className="ListLayout">
				<button>
					<img src={FoldIcon} alt="Fold Icon" />
				</button>
				<input
					className="Input-Item"
					type="text"
					placeholder="What needs to be done?"
				/>
			</div>
			<TodoContents />
		</>
	);
};

export default ListContents;
