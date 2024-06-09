import "./App.css";
import React from "react";
import useTodoState from "./components/hooks/useTodoState";
import SubmitForm from "./components/ui/SubmitForm";
import TodoList from "./components/ui/TodoList";
import Footer from "./components/ui/Footer";

function Main() {
  window.addEventListener("load", () => {
    localStorage.clear();
  });

  const { lists, setLists, inputRef, onSubmit, onDelete, onToggle, showConditionToggle, filteredTodoList } = useTodoState();

  return (
    <div id="root">
      <section className="todoapp container">
        <SubmitForm onSubmit={onSubmit} inputRef={inputRef} />
        <TodoList lists={lists} HandleToggleComplete={onToggle} HandleDeleteItem={onDelete} />
        <Footer ShowCompletedToggle={showConditionToggle} lists={lists} ClearCompleted={filteredTodoList} />
      </section>
    </div>
  );
}

export default Main;
