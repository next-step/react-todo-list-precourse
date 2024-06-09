import { useEffect, useState } from "react";
import Input from "./components/main/Input";
import Todo from "./components/main/Todo";
import Footer from "./components/main/Footer";
import "./style/Global.css";

export default function Main() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <div className="todo">
        <h1>Hyo's Todo</h1>
        <Input todos={todos} setTodos={setTodos} />
        <Todo todos={todos} setTodos={setTodos} />
      </div>
      <Footer />
    </>
  );
}
