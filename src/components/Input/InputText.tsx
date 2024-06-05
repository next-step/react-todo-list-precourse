import styles from './Input.module.css';

interface InputTextProps {
  type: 'text';
  id: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText = ({ type, placeholder, id, onChange }: InputTextProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      onChange={onChange}
      className={styles.input}
    />
  );
};

export default InputText;
