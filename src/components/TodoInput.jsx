import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodosContext";

function TodoInput() {
    const [inputValue, setInputValue] = useState("");
    const { addTodo } = useContext(TodoContext);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter" && inputValue.trim() !== "" ) {
            addTodo(inputValue.trim());
            setInputValue("");
        }
    };

    return(
        <input 
         type="text"
         value={inputValue}
         onChange={handleInputChange}
         onKeyDown={handleKeyDown}
        />
    );  
}

export default TodoInput;