import React, { useState } from "react";
import "../Styles/AddTodo.css"

const AddTodo = ({ appendTodo }) => {
  const [todoInput, setTodoInput] = useState("");

  // 제출하는 액션으로 간주하기에, handleSubmit으로 작성
  const handleSubmit = (e) => {
    // e.preventDefault() preventDefault 넣으니까, inputBox에 입력이 안됩니다. 코드에는 영향이 없지만, Feedback때 코멘트 달아주실 수 있을까 하여 해당코드 남겨둡니다.
    if (e.key == "Enter"){
      appendTodo(todoInput);
      // 제출과 동시에 inputBox 내의 입력값 삭제
      let input_text = document.getElementsByClassName("inputBox");
      for (let i = 0; i < input_text.length; i++) {
        input_text[i].value = '';
      };
      // 인풋 값 초기화
      setTodoInput("")
    };
  }

  return (
    <input
      id="todoInput" 
      type = "text"
      placeholder = "Add your task..."
      value = {todoInput}
      onChange={(e) => setTodoInput(e.target.value)}
      onKeyPress={handleSubmit}
    />
  );
}

export default AddTodo;