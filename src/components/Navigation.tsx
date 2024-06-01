import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/Button";
import { NavigationButon } from "./ui/NavigationButton";

interface NavigationProps {
  todos: Todo[];
  filter: Filter;
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  setFilter: Dispatch<SetStateAction<Filter>>;
}

export const Navigation = ({
  todos,
  filter,
  setTodos,
  setFilter,
}: NavigationProps) => {
  const remainTodoNum = todos.filter((todo) => !todo.done).length;

  const RemoveDoneTodo = () => {
    const newTodos = todos.filter((todo) => !todo.done);
    setTodos(newTodos);
  };

  return (
    <nav className="block">
      <span className="nav-item">남은 할 일: {remainTodoNum} 개</span>
      <div className="nav-item nav-button">
        <NavigationButon
          curFilter={filter}
          filter="모두"
          setFilter={setFilter}
        />
        <NavigationButon
          curFilter={filter}
          filter="진행중"
          setFilter={setFilter}
        />
        <NavigationButon
          curFilter={filter}
          filter="완료"
          setFilter={setFilter}
        />
      </div>
      <div className="nav-item">
        <Button variant="ghost" onClick={RemoveDoneTodo}>
          완료된 할 일 제거하기
        </Button>
      </div>
    </nav>
  );
};
