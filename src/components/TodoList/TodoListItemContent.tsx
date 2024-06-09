import Todo from "../../types/Todo";
import TodoItem from "../TodoItem";

type TodoListItemContentProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const findAndCheck = (todos: Todo[], id: string): Todo[] => {
  return todos.map(todo => {
    if (todo.id === id) {
      return { ...todo, status: todo.status === "Todo" ? "Done" : "Todo" };
    }
    return todo;
  });
};

const findAndDelete = (todos: Todo[], id: string) => {
  return todos.filter(todo => todo.id !== id);
};

function TodoListItemContent({ todos, setTodos }: TodoListItemContentProps) {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCheck={() => setTodos(prev => findAndCheck(prev, todo.id))}
          onDelete={() => setTodos(prev => findAndDelete(prev, todo.id))}
        />
      ))}
    </div>
  );
}

export default TodoListItemContent;
