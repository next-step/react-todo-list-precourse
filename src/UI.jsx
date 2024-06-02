import React from "react";
import { useNavigate } from "react-router-dom";
import "../src/UI.css";
import UIRender from "./UIRender";
import { useTodoState } from "./useToDoState";

function UI() {
  const { todos, onInsert, onRemove, onTouched, itemLeft } = useTodoState()
  const navigate = useNavigate()
  return (
    <UIRender 
      onInsert={onInsert} 
      todos={todos} 
      onRemove={onRemove} 
      onTouched={onTouched} 
      navigate={navigate} 
      itemLeft={itemLeft}
    />
  )
}

export default UI;
