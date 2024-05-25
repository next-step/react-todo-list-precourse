import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);

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

  return (
    <div id="root">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={onSubmit}>
            <div className="input-container">
              <input
                className="new-todo"
                id="todo-input"
                type="text"
                placeholder="what needs to be done?"
                onChange={onChangeInput}
                value={text}
              ></input>
              <button className="new-todo-add" type="submit">add</button>
            </div>
          </form>
        </header>
        <main className="main">
          <ul className="todo-list">
            {todoList.map((todoItem) => (
              <li className="todo-item" key={todoItem.id}>
                <div className="view">
                  <input className="toggle" type="checkbox" id="todo-item-toggle"/>
                  <label id="todo-item-label">{todoItem.text}</label>
                  <button 
                    className="destroy" 
                    id="todo-item-button"
                    onClick={() => onDelete(todoItem.id)}>
                    X
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </section>
    </div>
  );
}

export default App;
