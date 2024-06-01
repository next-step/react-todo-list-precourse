import "./Main.css";
import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  console.log('test');
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    const nextTodoList = todoList.concat({
      id: todoList.length,
      text,
      checked: false,
    });
    setTodoList(nextTodoList);
    setText("");    
    e.preventDefault();
  };
  const onDelete = (id) => {
    setTodoList(todoList.filter(todoItem => 
      todoItem.id !== id
    ));
  };

  return (
    <div id="root">
      <section className="todoapp">
        <Header text={text} onChangeInput={onChangeInput} onSubmit={onSubmit}/>
        <Body todoList={todoList} onDelete={onDelete}/>
      </section>
    </div>
  );
}

export default App;
