import InputText from './InputText';

interface InputFieldProps {
  type: 'text' | 'checkbox';
  label: string;
  placeholder?: string;
  onChange: () => void;
}

const InputField = ({ type, placeholder, label, onChange }: InputFieldProps) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      {type === 'text' && (
        <InputText type={type} placeholder={placeholder} id={label} onChange={onChange} />
      )}
    </div>
  );
};

export default InputField;
