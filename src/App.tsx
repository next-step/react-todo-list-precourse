import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");
  const [filter, setFilter] = useState<Filter>("모두");

  const remainTodoNum = todos.filter((todo) => !todo.done).length;
  const filterTodos = todos.filter((todo) => {
    if (filter === "모두") return true;
    if (filter === "진행중") return !todo.done;
    if (filter === "완료") return todo.done;
  });

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

  const addTodo = () => {
    const inputValue = input?.trim();
    if (inputValue) {
      setTodos((todo) => [
        ...todo,
        {
          text: inputValue,
          done: false,
        },
      ]);
    }
    setInput("");
  };

  const toggleTodo = (id: number) => {
    const newTodos = [...todos];
    newTodos[id].done = !newTodos[id].done;
    setTodos(newTodos);
  };

  const RemoveTodo = (id: number) => {
    const newTodos = todos.filter((_, index) => index !== id);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <header>
        <h1>To Do List</h1>
        <form onSubmit={(e) => e.preventDefault()} className="input block">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="할 일을 입력해주세요."
          />
          <button onClick={addTodo}>추가</button>
        </form>
      </header>
      <section>
        <div className="todo-list">
          {filterTodos?.map((todo, index) => {
            return (
              <div key={index} className="todo-item block">
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggleTodo(index)}
                />
                <label>{todo.text}</label>
                <button onClick={() => RemoveTodo(index)}>제거</button>
              </div>
            );
          })}
        </div>
        <nav className="block">
          <span className="nav-item">남은 할 일: {remainTodoNum} 개</span>
          <div className="nav-item">
            <button onClick={() => setFilter("모두")}>모두</button>
            <button onClick={() => setFilter("진행중")}>진행중</button>
            <button onClick={() => setFilter("완료")}>완료</button>
          </div>
          <div className="nav-item">
            <button>완료된 할 일 제거하기</button>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default App;
