import { useEffect, useState } from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { TodoInput } from "./components/TodoInput";
import { Text } from "./components/ui/Text";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("모두");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (!storedTodos) return;

    const parsedTodos: Todo[] = JSON.parse(storedTodos);
    parsedTodos.forEach((curTodo: Todo) => {
      setTodos((todo) => [...todo, restoreTodo(curTodo)]);
    });
  }, []);

  const restoreTodo = (curTodo: Todo) => ({
    text: curTodo.text,
    done: curTodo.done,
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <Text size="2xl">To Do List</Text>
      <TodoInput setTodos={setTodos} />
      {todos.length > 0 && (
        <>
          <Navigation curFilter={filter} setFilter={setFilter} />
          <TodoList todos={todos} setTodos={setTodos} filter={filter} />
          <Footer todos={todos} setTodos={setTodos} />
        </>
      )}
    </div>
  );
}

export default App;
