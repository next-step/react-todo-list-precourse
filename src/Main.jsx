import "./Main.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  console.log('test');
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("all");

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    if (text === "") {
      alert('할 일을 입력하세요.');
      setTodoList(todoList);
    } else {
      const nextTodoList = todoList.concat({
        id: todoList.length,
        text,
        checked: false,
      });
      setTodoList(nextTodoList);
      setText("");
    }
    e.preventDefault();
  };
  const onDelete = (id) => {
    setTodoList(todoList.filter(todoItem => 
      todoItem.id !== id
    ));
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
        <Header text={text} onChangeInput={onChangeInput} onSubmit={onSubmit}/>
        <Body todoList={filteredTodoList} onDelete={onDelete} onToggle={onToggle}/>
        <Footer todoList={todoList} setFilter={setFilter}/>
      </section>
    </div>
  );
}

export default App;
