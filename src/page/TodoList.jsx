import "./TodoList.css";
import { Header, Main, Footer } from "../components/index";
import { useState } from "react";
import { createContext } from "react";

export const todoContext = createContext();

const TodoList = () => {
  const [todoItems, setTodoItems] = useState([]);
  const addTodos = (todo) => {
    setTodoItems((prveTodo) => [...prveTodo, todo]);
  };

  return (
    <todoContext.Provider value={[todoItems, addTodos]}>
      <div className="TodoList">
        <Header />
        <Main />
        <Footer />
      </div>
    </todoContext.Provider>
  );
};

export default TodoList;
