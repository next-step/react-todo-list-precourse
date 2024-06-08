import React, { useState } from "react";

function TodoInput() {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter" && inputValue.trim() !== "" ) {
            console.log(inputValue);
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