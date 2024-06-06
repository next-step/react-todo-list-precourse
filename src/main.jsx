import Category from "./components/category/category";
import Footer from "./components/footer/footer";
import Listbox from "./components/listbox/listbox";
import Listboxes from "./components/listbox/listboxes";
import Textbox from "./components/textbox/textbox";
import "./styles/Main.css";
import { useState, useEffect } from "react";

function Main() {
  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(savedTodos);
  const [active, setActive] = useState(0);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="app">
      <h1>Todos</h1>
      <Textbox setTodos={setTodos} todos={todos} />
      <Category setActive={setActive} active={active} />
      <Listboxes todos={todos} setTodos={setTodos} active={active} />
      <Footer todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Main;
