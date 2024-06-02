import "./App.css";
import { useTodos } from "./contexts/todos/useTodos";
import { Text } from "./components/ui/Text";
import { TodoInput } from "./components/TodoInput";
import { TodoCard } from "./components/todocard/TodoCard";

function App() {
  const { todos } = useTodos();

  return (
    <div className="container">
      <Text variant="primary" size="2xl">
        To Do List
      </Text>
      <TodoInput />
      {todos.length > 0 ? <TodoCard /> : null}
    </div>
  );
}

export default App;
