import Header from '../header/Header';
import './MainContents.css';
import ListContents from '../input-list/ListContents';

const MainContents = () => {
	return (
		<>
			<header>
				<Header />
			</header>
			<div className="MainContentsLayout">
				<ListContents />
			</div>
		</>
	);
};

export default MainContents;
