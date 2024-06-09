type InputProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  onEndInput: (value: string) => void;
};

function Input({ value, placeholder, onChange, onEndInput }: InputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value !== "") onEndInput(value);
  };
  return (
    <input
      type="text"
      onKeyDown={handleKeyDown}
      onChange={e => onChange(e.target.value)}
      value={value}
      placeholder={placeholder}
    />
  );
}

export default Input;
