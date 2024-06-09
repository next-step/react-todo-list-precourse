import { useState, useRef } from "react";
import HandleSubmit from "../handlers/HandleSubmit";
import HandleDeleteItem from "../handlers/HandleDeleteItem";
import HandleToggleComplete from "../handlers/HandleToggleComplete";
import ClearCompleted from "../handlers/ClearCompleted";
import ShowCompletedToggle from "../handlers/ShowCompletedToggle";

const useTodoState = () => {
  const [lists, setLists] = useState([]);
  const NewID = () => Math.random().toString(36).substr(2, 16);
  const inputRef = useRef();

  const onSubmit = (e) => HandleSubmit(e, NewID, inputRef, lists, setLists);
  const onDelete = (id) => HandleDeleteItem(id, lists, setLists);
  const onToggle = (id) => HandleToggleComplete(id, lists, setLists, NewID);
  const showConditionToggle = (condition) =>
    ShowCompletedToggle(condition, lists, setLists);
  const filteredTodoList = () => ClearCompleted(lists, setLists);

  return {
    lists,
    setLists,
    NewID,
    inputRef,
    onSubmit,
    onDelete,
    onToggle,
    filteredTodoList,
    showConditionToggle,
  };
};

export default useTodoState;
