import styles from './Header.module.css';
import Input from '../Input/Input';
import { useState } from 'react';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(Date.now());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter')
      // addHandler
      resetInput(e);
  };

  const resetInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.currentTarget.value = '';
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <Input
        type="text"
        placeholder="What needs to be done?"
        label="todo-input"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </header>
  );
};

export default Header;
