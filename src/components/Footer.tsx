import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/Button";
import { Text } from "./ui/Text";

interface FooterProps {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

export const Footer = ({ todos, setTodos }: FooterProps) => {
  const remainTodoNum = todos.filter((todo) => !todo.done).length;

  const RemoveDoneTodo = () => {
    const newTodos = todos.filter((todo) => !todo.done);
    setTodos(newTodos);
  };

  return (
    <footer>
      <Text>남은 할 일: {remainTodoNum} 개</Text>
      <div>
        <Button variant="ghost" onClick={RemoveDoneTodo}>
          완료된 할 일 제거하기
        </Button>
      </div>
    </footer>
  );
};
