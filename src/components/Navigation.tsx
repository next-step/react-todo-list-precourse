import { Dispatch, SetStateAction } from "react";

interface NavigationProps {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  setFilter: Dispatch<SetStateAction<Filter>>;
}

export const Navigation = ({ todos, setTodos, setFilter }: NavigationProps) => {
  const remainTodoNum = todos.filter((todo) => !todo.done).length;

  const RemoveDoneTodo = () => {
    const newTodos = todos.filter((todo) => !todo.done);
    setTodos(newTodos);
  };

  return (
    <nav className="block">
      <span className="nav-item">남은 할 일: {remainTodoNum} 개</span>
      <div className="nav-item">
        <button onClick={() => setFilter("모두")}>모두</button>
        <button onClick={() => setFilter("진행중")}>진행중</button>
        <button onClick={() => setFilter("완료")}>완료</button>
      </div>
      <div className="nav-item">
        <button onClick={RemoveDoneTodo}>완료된 할 일 제거하기</button>
      </div>
    </nav>
  );
};
