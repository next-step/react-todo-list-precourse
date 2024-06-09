import './GlobalLayout.css';
import { ILayout } from '../../types/LayoutTypes';

const GlobalLayout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <div className='PCLayout'>
        <div className='Content'>{children}</div>
      </div>
    </>
  );
};

export default GlobalLayout;
