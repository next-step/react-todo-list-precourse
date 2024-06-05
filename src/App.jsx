import React, { useState, useEffect } from "react";
import TodoBoard from "./components/TodoBoard";

function App() {
    const [inputValue, setInputValue] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [filter, setFilter] = useState("all");
    const [totalTodos, setTotalTodos] = useState(0);

    useEffect(() => {
        const savedTodoList = JSON.parse(localStorage.getItem("todoList"));
        if (savedTodoList) {
            setTodoList(savedTodoList);
            const remainingTodos = savedTodoList.filter(item => !item.completed).length;
            setTotalTodos(remainingTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }, [todoList]);

    const addItem = () => {
        if (inputValue.trim() === "") {
            return;
        }
        const newItem = { id: Date.now(), text: inputValue, completed: false };
        setTodoList([...todoList, newItem]);
        setInputValue("");
        setTotalTodos(totalTodos + 1);
    };

    const deleteItem = (id) => {
        const itemToDelete = todoList.find(item => item.id === id);
        const newTodoList = todoList.filter(item => item.id !== id);
        if (itemToDelete && !itemToDelete.completed) {
            setTotalTodos(Math.max(totalTodos - 1, 0));
        }
        setTodoList(newTodoList);
    };

    const toggleItemCompletion = (id) => {
        const newTodoList = todoList.map(item =>
            item.id === id ? { ...item, completed: !item.completed } : item
        );

        const remainingTodos = newTodoList.filter(item => !item.completed).length;

        setTotalTodos(remainingTodos);
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
            <p>남은 할 일 개수: {totalTodos}</p>
            <TodoBoard
                todoList={getFilteredTodoList()}
                deleteItem={deleteItem}
                toggleItemCompletion={toggleItemCompletion}
            />
        </main>
    );
}

export default App;