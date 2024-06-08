import { Dispatch, SetStateAction } from "react";
import { Input } from "../ui/Input";

interface TodoFormInputProps {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}

export const TodoFormInput = ({ input, setInput }: TodoFormInputProps) => {
  return (
    <Input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="할 일을 입력해주세요."
    />
  );
};
