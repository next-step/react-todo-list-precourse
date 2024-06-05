import styles from './Input.module.css';

interface InputProps {
  type: 'text';
  label: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = ({ type, placeholder, label, onChange, onKeyDown }: InputProps) => {
  return (
    <div>
      <label htmlFor={label} className={styles['sr-only']}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={label}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={styles.input}
      />
    </div>
  );
};

export default Input;
