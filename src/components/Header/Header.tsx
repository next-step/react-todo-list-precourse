import styles from './Header.module.css';
import Input from '../Input/Input';
import { useState } from 'react';
import { useContext } from 'react';
import TodoContext from '../../context/TodoContext';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const [todo, setTodo] = useState<string>('');

  const value = useContext(TodoContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      value?.actions.addTodo(todo);
      resetInput();
    }
  };

  const resetInput = () => {
    setTodo('');
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <Input
        type="text"
        placeholder="What needs to be done?"
        label="todo-input"
        value={todo}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </header>
  );
};

export default Header;
