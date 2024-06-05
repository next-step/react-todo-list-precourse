import React, { useState } from "react";
import TodoBoard from "./components/TodoBoard";

function App() {
    const [inputValue, setInputValue] = useState("");
    const [todoList, setTodoList] = useState([]);

    const addItem = () => {
        if (inputValue.trim() === "") {
            return;
        }
        const newItem = { text: inputValue, completed: false };
        setTodoList([...todoList, newItem]);
        setInputValue("");
    };

    const deleteItem = (index) => {
        const newTodoList = todoList.filter((_, i) => i !== index);
        setTodoList(newTodoList);
    };

    const toggleItemCompletion = (index) => {
        const newTodoList = todoList.map((item, i) =>
            i === index ? { ...item, completed: !item.completed } : item
        );
        setTodoList(newTodoList);
    };

    return (
        <main>
            <input
                value={inputValue}
                type="text"
                onChange={(event) => setInputValue(event.target.value)}
            />
            <button onClick={addItem}>추가</button>
            <TodoBoard
                todoList={todoList}
                deleteItem={deleteItem}
                toggleItemCompletion={toggleItemCompletion}
            />
        </main>
    );
}

export default App;