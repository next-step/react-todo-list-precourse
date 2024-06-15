import Todo from "../../types/Todo";
import TodoInput from "../TodoInput";

type TodoListInputContentProps = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function TodoListInputContent({ setTodos }: TodoListInputContentProps) {
  return (
    <TodoInput
      onAddTodo={todo => {
        setTodos(prev => [...prev, { ...todo, id: `todo:${Date.now()}` }]);
      }}
    />
  );
}

export default TodoListInputContent;
