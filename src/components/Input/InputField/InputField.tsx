import styles from './InputField.module.css';
import TextInput from '../TextInput/TextInput';
import ToggleAll from '../ToggleAll/ToogleAll';

export interface InputFieldProps {
  type: 'text' | 'checkbox';
  label: string;
  placeholder?: string;
  value?: string;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputField = ({
  type,
  placeholder,
  label,
  value,
  checked,
  onChange,
  onKeyDown,
}: InputFieldProps) => {
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
      {type === 'checkbox' && (
        <ToggleAll
          type={type}
          label={label}
          value={value}
          checked={checked ?? false}
          onChange={onChange}
        />
      )}
      <label htmlFor={label} className={type === 'text' ? styles['sr-only'] : ''}>
        {type === 'text' && label}
      </label>
    </div>
  );
};

export default InputField;
