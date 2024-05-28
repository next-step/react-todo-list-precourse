import MainHeader from './MainHeader';
import MainFooter from './MainFooter';

import '../../css/main.css'

const MainContainer = () => {
  return <div className='main-container'>
    <MainHeader title={'TODOS'} />
    <MainFooter />
  </div>;
};
export default MainContainer;
