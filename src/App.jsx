import React, { useState } from "react";

function App() {
    const [inputValue,setInputValue] = useState("")
    const [todoList,setTodoList]=useState([])
    const addItem =() =>{
        console.log("here",inputValue)
        setTodoList([...todoList,inputValue])
    }
    return (
        <main>
            <input value ={inputValue}type="text"
            onChange = {(event)=>setInputValue(event.target.value)}/>
            <button onClick={addItem}>추가</button>
        </main>
    );
}
export default App;