import React, { useState } from "react";
import TodoBoard from "./components/TodoBoard";

function App() {
    const [inputValue,setInputValue] = useState("")
    const [todoList,setTodoList]=useState([])
    const addItem =() =>{
        setTodoList([...todoList,inputValue])
        setInputValue("");
    }

    const deleteItem = (index) => {
        const newTodoList = todoList.filter((_, i) => i !== index);
        setTodoList(newTodoList);
    }

    return (
        <main>
            <input value ={inputValue}type="text"
            onChange = {(event)=>setInputValue(event.target.value)}/>
            <button onClick={addItem}>추가</button>

            <TodoBoard todoList={todoList} deleteItem={deleteItem}/>
        </main>
    );
}
export default App;