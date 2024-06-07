import { Button } from "../ui/Button";

interface TodoFormButtonProps {
  onClick: () => void;
}

export const TodoFormButton = ({ onClick }: TodoFormButtonProps) => {
  return (
    <Button size="md" onClick={onClick}>
      추가
    </Button>
  );
};
