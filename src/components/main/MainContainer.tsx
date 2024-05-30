import MainHeader from './MainHeader';
import MainFooter from './MainFooter';

import '../../css/main.css'
import TodoContainer from '../todo/TodoContainer.tsx';

const MainContainer = () => {
  return <div className='main-container'>
    <MainHeader title={'TODOS'} />
    <TodoContainer />
    <MainFooter />
  </div>;
};
export default MainContainer;
