import InputText from './InputText';
import styles from './Input.module.css';

interface InputFieldProps {
  type: 'text' | 'checkbox';
  label: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ type, placeholder, label, onChange }: InputFieldProps) => {
  return (
    <div>
      <label htmlFor={label} className={styles['sr-only']}>
        {label}
      </label>
      {type === 'text' && (
        <InputText type={type} placeholder={placeholder} id={label} onChange={onChange} />
      )}
    </div>
  );
};

export default InputField;
