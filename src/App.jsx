import Listbox from "./components/listbox/listbox";
import Textbox from "./components/textbox/textbox";
import "./styles/App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="app">
      <h1>Todos</h1>
      <Textbox setTodos={setTodos} todos={todos} />
      {todos
        .filter((todo) => {
          if (active === 0) return true;
          if (active === 1) return !todo.checked;
          if (active === 2) return todo.checked;
        })
        .map((todo, index) => (
          <Listbox key={index} todo={todo} setTodos={setTodos} index={index} />
        ))}
    </div>
  );
}

export default App;
