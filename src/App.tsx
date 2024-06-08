import "./App.css";
import { useTodos } from "./contexts/todos/useTodos";
import { TodoCard } from "./components/todocard/TodoCard";
import { Header } from "./components/header/Header";

function App() {
  const { todos } = useTodos();

  return (
    <div className="container">
      <Header />
      {todos.length > 0 ? <TodoCard /> : null}
    </div>
  );
}

export default App;
