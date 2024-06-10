import styles from './Header.module.css';
import InputField from '../Input/InputField/InputField';
import { useContext } from 'react';
import TodoContext from '../../context/TodoContext';
import Title from './Title/Title';
import { useTodoInput } from '../../hooks/useTodoInput';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const value = useContext(TodoContext);
  const { todo, handleChange, handleKeyDown } = useTodoInput(value?.actions.addTodo);

  return (
    <header className={styles.header}>
      <Title title={title} />
      <div className={styles['input-container']}>
        <InputField
          type="text"
          placeholder="What needs to be done?"
          label="todo-input"
          value={todo}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </header>
  );
};

export default Header;
