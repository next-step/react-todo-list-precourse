import "./Main.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import useTodoState from "./components/hooks/useTodoState";

function App() {
  const { text, onChangeInput, onSubmit, todoList, onDelete, onToggle, filteredTodoList, setFilter } = useTodoState();

  return (
    <div id="root">
      <section className="todoapp">
        <Header text={text} onChangeInput={onChangeInput} onSubmit={onSubmit} />
        <Body todoList={filteredTodoList} onDelete={onDelete} onToggle={onToggle} />
        <Footer todoList={todoList} setFilter={setFilter} />
      </section>
    </div>
  );
}

export default App;
