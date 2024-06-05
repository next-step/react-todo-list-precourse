import styles from './Header.module.css';
import Input from '../Input/Input';

interface HeaderProps {
  title: string;
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};

const Header = ({ title }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <Input
        type="text"
        placeholder="What needs to be done?"
        label="todo-input"
        onChange={handleChange}
      />
    </header>
  );
};

export default Header;
