import React from "react";

const TodoForm = () => {
  return (
    <form>
      <input type="text" placeholder="할 일을 입력하세요" />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
