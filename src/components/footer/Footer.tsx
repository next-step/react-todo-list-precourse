import './Footer.css';
import { FooterProps } from './types';

const Footer: React.FC<FooterProps> = ({
	number,
	onFilterChange,
	onClearCompleted,
}) => {
	return (
		<div className="FooterLayout">
			<div className="FooterContainer">
				<div>{number} items left!</div>
				<div className="StateContainer">
					<button onClick={() => onFilterChange('all')}>All</button>
					<button onClick={() => onFilterChange('active')}>Active</button>
					<button onClick={() => onFilterChange('completed')}>Completed</button>
				</div>
				<button id="Clear" onClick={onClearCompleted}>
					Clear completed
				</button>
			</div>
		</div>
	);
};

export default Footer;
