import React, { useState, useEffect } from "react";
import Header from "../../components/Common/Header/Header";
import InputContainer from "../../components/Common/Input/InputContainer";
import TodoList from "../../components/Todo/TodoList/TodoList";
import Filter from "../../components/Todo/Filters/Filter";
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

  useEffect(() => {
    const storedTodos = JSON.parse(sessionStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  const addTodo = () => {
    if (newTodo.trim() === "") {
      alert("오늘 할 일을 작성해보자!");
    } else {
      const newTodoItem = {
        id: Date.now(),
        text: newTodo,
        isTodoCompleted: false,
      };
      const updatedTodos = [...todos, newTodoItem];
      setTodos(updatedTodos);

      sessionStorage.setItem("todos", JSON.stringify(updatedTodos));
      setNewTodo("");
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);

    sessionStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const checkTodoComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, isTodoCompleted: !todo.isTodoCompleted }
        : todo
    );
    setTodos(updatedTodos);

    sessionStorage.setItem("todos", JSON.stringify(updatedTodos));
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
      <InputContainer
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleEnterPress={handleEnterPress}
        addTodo={addTodo}
      />
      <Filter
        filterTodos={filterTodos}
        allCount={allCount}
        completeCount={completeCount}
        activeCount={activeCount}
      />
      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        checkTodoComplete={checkTodoComplete}
      />
    </div>
  );
};

export default Main;
