import { useState } from "react";

const useTodoForm = (addTodo) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const handleChange = (e) => setValue(e.target.value);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateInput(value, setError)) addTodoAndClear(value, setValue, setError, addTodo);
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter')  handleSubmit(e);
    };

    return { value, error, handleChange, handleSubmit, handleKeyPress };
};

const validateInput = (input, setError) => {
    if (!input.trim()) {
        setError("할 일을 입력하세요.");
        return false;
    }
    return true;
};

const addTodoAndClear = (newTodo, setValue, setError, addTodo) => {
    addTodo(newTodo);
    setValue("");
    setError("");
};

export default useTodoForm;