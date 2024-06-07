import styles from './InputField.module.css';
import TextInput from '../TextInput/TextInput';

export interface InputFieldProps {
  type: 'text';
  label: string;
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputField = ({ type, placeholder, label, value, onChange, onKeyDown }: InputFieldProps) => {
  return (
    <div>
      {type === 'text' && (
        <TextInput
          type={type}
          placeholder={placeholder}
          label={label}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      )}
      <label htmlFor={label} className={styles['sr-only']}>
        {label}
      </label>
    </div>
  );
};

export default InputField;
