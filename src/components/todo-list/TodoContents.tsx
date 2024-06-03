import Footer from '../footer/Footer';
import './TodoContents.css';

import DeleteIcon from '../../assets/Delete-Icon.svg';
const TodoContents = () => {
	return (
		<>
			<div className="TodoLayout">
				<div className="TodoContainer">
					<label className="checkbox_label">
						<input type="checkbox" />
						<span className="checkbox_icon"></span>
					</label>
					<div className="checkbox_text">
						<div>할 일 1</div>
						<div className="Image_container">
							<img src={DeleteIcon} alt="삭제하기" />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default TodoContents;
