import { React, useState, useEffect } from "react";
import "../Styles/TodoTemplate.css";
import AddTodo from "./AddTodos";
import TodoList from "./ListTodos";
import Filters from "./Filter";


const TodoTemplate = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');


  // 유저의 Todo 인풋값 추가하는 함수
  const appendTodo = (todoInput) => {
    // inputBox에 아무것도 입력하지 않았을 때, alert 띄우기.
    if (todoInput == "") {
      alert("할 일을 입력하세요!");
      return;
    }
    // 유저 인풋값 id, isCompleted 상태값 주기
    const appendTodoItem = 
    {
      id: Date.now(),
      todoItem: todoInput,
      isCompleted: false,
    };
    setTodos([...todos, appendTodoItem])
  };


  // 완료여부 핸들링
  const handleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted} : todo
      )
    );
  };

  // Todo 아이템 지우는 함수 핸들링
  const handleDelete = (id) => {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  };


  // Todo 아이템들 진행상황 필터링
  const filteredItems = todos.filter((todo) => {
    if (filter == "completed") {
      return todo.isCompleted;
    } else if (filter == "active") {
      return !todo.isCompleted;
    } else {    // 진행여부 관계없이 모두 보여주기!
      return true;
    }
  });

  
  return (
    <>
      <AddTodo appendTodo={appendTodo}/>
      <TodoList
        todos={filteredItems}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
      <Filters 
        filter={filter}
        setFilter={setFilter}
      />
    </>
  );
}
  
export default TodoTemplate;