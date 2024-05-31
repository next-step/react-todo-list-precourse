import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { Navigation } from "./components/Navigation";

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
      <Header setTodos={setTodos} />
      <section>
        <TodoList todos={todos} setTodos={setTodos} filter={filter} />
        <Navigation todos={todos} setTodos={setTodos} setFilter={setFilter} />
      </section>
    </div>
  );
}

export default App;
