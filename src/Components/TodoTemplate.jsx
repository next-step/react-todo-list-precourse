import { React, useState, useEffect } from "react";
import "../Styles/TodoTemplate.css";
import AddTodo from "./AddTodos";

const TodoTemplate = () => {
  const [todos, setTodos] = useState([]);
  
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
    return (
      <>
        <AddTodo appendTodo={appendTodo}/>
      </>
    )
  }
  
  export default TodoTemplate;