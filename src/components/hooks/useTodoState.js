import { useState } from "react";
import handleOnSubmit from "../handlers/handleOnSubmit";
import handleOnDelete from "../handlers/handleOnDelete";
import handleOnToggle from "../handlers/handleOnToggle";
import filterTodos from "../utils/filterTodos";

const useTodoState = () => {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("all");

  const onChangeInput = (e) => { setText(e.target.value); };
  const onSubmit = (e) => handleOnSubmit(e, text, todoList, setTodoList, setText);
  const onDelete = (id) => handleOnDelete(id, todoList, setTodoList);
  const onToggle = (id) => handleOnToggle(id, todoList, setTodoList);
  const filteredTodoList = filterTodos(todoList, filter);

  return {
    text, onChangeInput, onSubmit, todoList, onDelete, onToggle, filteredTodoList, setFilter
  };
};

export default useTodoState;
