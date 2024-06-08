import styles from './InputField.module.css';
import TextInput from '../TextInput/TextInput';
import Checkbox from '../Checkbox/Checkbox';

export interface InputFieldProps {
  type: 'text' | 'checkbox';
  label: string;
  checked?: boolean;
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputField = ({
  type,
  placeholder,
  checked,
  label,
  value,
  onChange,
  onKeyDown,
}: InputFieldProps) => {
  return (
    <>
      {type === 'text' && (
        <TextInput {...{ type, placeholder, label, value, onChange, onKeyDown }} />
      )}
      {type === 'checkbox' && (
        <Checkbox type={type} checked={checked} onChange={onChange} label={label} />
      )}
      <label htmlFor={label} className={type === 'text' ? styles['sr-only'] : ''}>
        {type === 'text' && label}
      </label>
    </>
  );
};

export default InputField;
