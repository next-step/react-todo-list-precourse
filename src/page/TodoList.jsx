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

  const isTodoDone = (Key) => {
    setTodoItems((prevTodos) => prevTodos.map((todo) => (todo.key === Key ? { ...todo, isDone: !todo.isDone } : todo)));
  };

  const allTodoDone = () => {
    setTodoItems((prevTodos) => prevTodos.map((todo) => ({ ...todo, isDone: true })));
  };

  const deleteTodo = (Key) => {
    setTodoItems((prevTodos) => prevTodos.filter((todo) => todo.key !== Key));
  };

  const deleteDoneTodo = () => {
    setTodoItems((prevTodos) => prevTodos.filter((todo) => todo.isDone === false));
  };

  return (
    <todoContext.Provider value={[todoItems, addTodos, isTodoDone, allTodoDone, deleteTodo, deleteDoneTodo]}>
      <div className="TodoList">
        <Header />
        <Main />
        <Footer />
      </div>
    </todoContext.Provider>
  );
};

export default TodoList;
