import { useState } from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { TodoInput } from "./components/TodoInput";
import { Text } from "./components/ui/Text";
import { useTodos } from "./hooks/useTodo";

function App() {
  const [filter, setFilter] = useState<Filter>("모두");
  const { todos } = useTodos();

  return (
    <div className="container">
      <Text variant="primary" size="2xl">
        To Do List
      </Text>
      <TodoInput />
      {todos.length > 0 && (
        <div className="todo-card">
          <Navigation curFilter={filter} setFilter={setFilter} />
          <TodoList filter={filter} />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
