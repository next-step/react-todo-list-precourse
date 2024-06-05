interface InputTextProps {
  type: 'text';
  id: string;
  placeholder?: string;
  onChange: () => void;
}

const InputText = ({ type, placeholder, id, onChange }: InputTextProps) => {
  return <input type={type} placeholder={placeholder} id={id} onChange={onChange} />;
};

export default InputText;
