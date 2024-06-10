import { InputFieldProps } from '../InputField/InputField';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends InputFieldProps {
  type: 'checkbox';
}

const Checkbox = ({ type, onChange, checked, label }: CheckboxProps) => {
  return <input {...{ type, onChange, checked }} id={label} className={styles.toggle} />;
};

export default Checkbox;
