import './GlobalLayout.css';
import { ILayout } from './types';

const GlobalLayout: React.FC<ILayout> = ({ children }) => {
	return (
		<>
			<div className="PCLayout">
				<div className="Content">{children}</div>
			</div>
		</>
	);
};

export default GlobalLayout;
