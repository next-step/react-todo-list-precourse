import { useEffect, useState } from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { TodoInput } from "./components/TodoInput";
import { Text } from "./components/ui/Text";

function App() {
  const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
  const [todos, setTodos] = useState<Todo[]>(storedTodos);
  const [filter, setFilter] = useState<Filter>("모두");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <Text variant="primary" size="2xl">
        To Do List
      </Text>
      <TodoInput setTodos={setTodos} />
      {todos.length > 0 && (
        <div className="todo-card">
          <Navigation curFilter={filter} setFilter={setFilter} />
          <TodoList todos={todos} setTodos={setTodos} filter={filter} />
          <Footer todos={todos} setTodos={setTodos} />
        </div>
      )}
    </div>
  );
}

export default App;
