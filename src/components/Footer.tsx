import { useTodos } from "../hooks/useTodo";
import { useTodoAction } from "../hooks/useTodoAction";
import { Button } from "./ui/Button";
import { Text } from "./ui/Text";

export const Footer = () => {
  const { todos } = useTodos();
  const { removeDoneTodo } = useTodoAction();
  const remainTodoNum = todos.filter((todo) => !todo.done).length;

  return (
    <footer>
      <Text>남은 할 일: {remainTodoNum} 개</Text>
      <Button variant="ghost" onClick={() => removeDoneTodo()}>
        완료된 할 일 제거하기
      </Button>
    </footer>
  );
};
