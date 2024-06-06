import "./Main.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import handleOnSubmit from "./components/handlers/handleOnSubmit";
import handleOnDelete from "./components/handlers/handleOnDelete";

function App() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("all");

  const onChangeInput = (e) => {
    setText(e.target.value);
  };
  const onToggle = (id) => {
    setTodoList(
      todoList.map((todoItem) =>
        todoItem.id === id ? {...todoItem, checked: !todoItem.checked} : todoItem
      )
    );
  };
  const filteredTodoList = todoList.filter((todoItem) => {
    console.log(todoItem, " => ", todoItem.checked);
    if (filter === "all") return true;
    if (filter === "active") return !todoItem.checked;
    if (filter === "completed") return todoItem.checked;
  });

  return (
    <div id="root">
      <section className="todoapp">
        <Header 
          text={text} 
          onChangeInput={onChangeInput} 
          onSubmit={(e) => handleOnSubmit(e, text, todoList, setTodoList, setText)}
        />
        <Body 
          todoList={filteredTodoList} 
          onDelete={(id) => handleOnDelete(id, todoList, setTodoList)} 
          onToggle={onToggle}/>
        <Footer todoList={todoList} setFilter={setFilter}/>
      </section>
    </div>
  );
}

export default App;
