import React, { useState, useEffect } from "react";
import Header from "../../components/Common/Header/Header";
import TodoList from "../../components/Todo/TodoList/TodoList";
import "./Main.css";

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");
  const [allCount, setAllCount] = useState(0);
  const [completeCount, setCompleteCount] = useState(0);
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    setAllCount(todos.length);
    setCompleteCount(todos.filter((todo) => todo.isTodoCompleted).length);
    setActiveCount(todos.filter((todo) => !todo.isTodoCompleted).length);
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() === "") {
      alert("오늘 할 일을 작성해보자!");
    } else {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTodo, isTodoCompleted: false },
      ]);
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

  const checkTodoComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isTodoCompleted: !todo.isTodoCompleted }
          : todo
      )
    );
  };

  const filterTodos = (filter) => {
    setFilter(filter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "complete") {
      return todo.isTodoCompleted;
    } else if (filter === "active") {
      return !todo.isTodoCompleted;
    } else {
      return true;
    }
  });

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
      <div className="filters">
        <button className="filterBtn" onClick={() => filterTodos("all")}>
          {" "}
          전체 ({allCount})
        </button>
        <button className="filterBtn" onClick={() => filterTodos("complete")}>
          완료 ({completeCount})
        </button>
        <button className="filterBtn" onClick={() => filterTodos("active")}>
          진행중 ({activeCount})
        </button>
      </div>
      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        checkTodoComplete={checkTodoComplete}
      />
    </div>
  );
};

export default Main;
