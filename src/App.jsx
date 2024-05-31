import Category from "./components/category/category";
import Footer from "./components/footer/footer";
import Listbox from "./components/listbox/listbox";
import Textbox from "./components/textbox/textbox";
import "./styles/App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [active, setActive] = useState(0);
  return (
    <div className="app">
      <h1>Todos</h1>
      <Textbox setTodos={setTodos} todos={todos} />
      <Category setActive={setActive} active={active} />
      {todos
        .filter((todo) => {
          if (active === 0) return true;
          if (active === 1) return !todo.checked;
          if (active === 2) return todo.checked;
        })
        .map((todo, index) => (
          <Listbox key={index} todo={todo} setTodos={setTodos} index={index} />
        ))}
      <Footer todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
