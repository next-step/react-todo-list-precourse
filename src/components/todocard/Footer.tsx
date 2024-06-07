import { useTodos } from "../../contexts/todos/useTodos";
import { useTodoActions } from "../../hooks/useTodoActions";
import { getRemainTodosNum } from "../../utils/filterTodo";
import { Button } from "../ui/Button";
import { Text } from "../ui/Text";

export const Footer = () => {
  const { todos } = useTodos();
  const { removeDoneTodos } = useTodoActions();
  const remainTodoNum = getRemainTodosNum(todos);

  return (
    <footer>
      <Text>남은 할 일: {remainTodoNum} 개</Text>
      <Button variant="ghost" onClick={() => removeDoneTodos()}>
        완료된 할 일 제거하기
      </Button>
    </footer>
  );
};
