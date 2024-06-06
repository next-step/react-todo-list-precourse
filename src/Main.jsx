import "./Main.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import handleOnSubmit from "./components/handlers/handleOnSubmit";
import handleOnDelete from "./components/handlers/handleOnDelete";
import handleOnToggle from "./components/handlers/handleOnToggle";
import filterTodos from "./components/utils/filterTodos";

function App() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("all");

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const filteredTodoList = filterTodos(todoList, filter);

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
          onToggle={(id) => handleOnToggle(id, todoList, setTodoList)}
        />
        <Footer 
          todoList={todoList} 
          setFilter={setFilter}
        />
      </section>
    </div>
  );
}

export default App;
