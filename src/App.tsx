import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("모두");

  const remainTodoNum = todos.filter((todo) => !todo.done).length;

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (!storedTodos) {
      return;
    }

    const parsedTodos: Todo[] = JSON.parse(storedTodos);
    parsedTodos.forEach((cur: Todo) => {
      setTodos((todo) => [
        ...todo,
        {
          text: cur.text,
          done: cur.done,
        },
      ]);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const RemoveDoneTodo = () => {
    const newTodos = todos.filter((todo) => !todo.done);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <Header setTodos={setTodos} />
      <section>
        <TodoList todos={todos} setTodos={setTodos} filter={filter} />
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
      </section>
    </div>
  );
}

export default App;
