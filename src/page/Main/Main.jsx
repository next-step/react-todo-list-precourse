import React, { useState } from "react";
import Header from "../../components/Common/Header/Header";
import TodoList from "../../components/Todo/TodoList/TodoList";
import "./Main.css";
const Main = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") {
      alert("오늘 할 일을 작성해보자!");
    } else {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };
  return (
    <div className="wrapper">
      <Header />
      <div className="inputContainer">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleEnterPress}
          placeholder="이것이 오늘의 할 일"
          className="todoInputBox"
        />
        <button className="addTodoBtn" onClick={addTodo}>
          추가!
        </button>
      </div>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Main;
