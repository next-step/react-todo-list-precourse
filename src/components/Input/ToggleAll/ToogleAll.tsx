import styles from './ToggleAll.module.css';
import { InputFieldProps } from '../InputField/InputField';

interface ToggleAllProps extends InputFieldProps {
  type: 'checkbox';
  checked: boolean;
}

const ToggleAll = ({ type, label, checked, onChange }: ToggleAllProps) => {
  return (
    <input
      type={type}
      id={label}
      checked={checked}
      onChange={onChange}
      className={styles['toggle-all']}
    />
  );
};

export default ToggleAll;
