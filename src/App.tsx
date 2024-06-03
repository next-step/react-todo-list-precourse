import MainContents from './components/contents/MainContents';
import GlobalLayout from './styles/layouts/GlobalLayout';

const App = () => {
	return (
		<>
			<GlobalLayout>
				<MainContents />
			</GlobalLayout>
		</>
	);
};

export default App;
