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

const renderInput = ({
  type,
  placeholder,
  checked,
  label,
  value,
  onChange,
  onKeyDown,
}: InputFieldProps) => {
  if (type === 'text')
    return <TextInput {...{ type, placeholder, label, value, onChange, onKeyDown }} />;
  if (type === 'checkbox') return <Checkbox {...{ type, checked, onChange, label }} />;
};

const InputField = (props: InputFieldProps) => {
  return (
    <>
      {renderInput(props)}
      <label htmlFor={props.label} className={props.type === 'text' ? styles['sr-only'] : ''}>
        {props.type === 'text' && props.label}
      </label>
    </>
  );
};

export default InputField;
