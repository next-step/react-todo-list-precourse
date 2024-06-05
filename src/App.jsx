import React, { useState } from "react";
import TodoBoard from "./components/TodoBoard";

function App() {
    const [inputValue, setInputValue] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [filter, setFilter] = useState("all"); // 추가: 필터 상태

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

    const getFilteredTodoList = () => {
        if (filter === "completed") {
            return todoList.filter(item => item.completed);
        } else if (filter === "active") {
            return todoList.filter(item => !item.completed);
        } else {
            return todoList;
        }
    };

    return (
        <main>
            <input
                value={inputValue}
                type="text"
                onChange={(event) => setInputValue(event.target.value)}
            />
            <button onClick={addItem}>추가</button>
            <div>
                <button onClick={() => setFilter("all")}>전체보기</button>
                <button onClick={() => setFilter("active")}>남은 할일</button>
                <button onClick={() => setFilter("completed")}>완료된 할일</button>
            </div>
            <TodoBoard
                todoList={getFilteredTodoList()}
                deleteItem={deleteItem}
                toggleItemCompletion={toggleItemCompletion}
            />
        </main>
    );
}

export default App;