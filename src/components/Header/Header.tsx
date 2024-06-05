import styles from './Header.module.css';
import InputField from '../Input/InputField';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <InputField
        type="text"
        placeholder="What needs to be done?"
        label="todo-input"
        onChange={handleChange}
      />
    </header>
  );
};

export default Header;
