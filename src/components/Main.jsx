import React from "react";
import TodoForm from './TodoForm.jsx';
import TodoLists from './TodoLists.jsx';
const Main = () => {
  return (
    <div>
      <TodoForm />
      <TodoLists/>
    </div>
  );
};

export default Main;
