import { InputFieldProps } from '../InputField/InputField';
import styles from './TextInput.module.css';

export interface TextInputProps extends InputFieldProps {
  type: 'text';
}

const TextInput = ({ type, placeholder, label, value, onChange, onKeyDown }: TextInputProps) => {
  return (
    <input
      {...{ type, placeholder, value, onChange, onKeyDown }}
      id={label}
      className={styles['text-input']}
    />
  );
};

export default TextInput;
