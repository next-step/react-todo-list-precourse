import { useState } from "react";

const useTodoForm = () => {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => setValue(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value.trim()) {
        setError("할 일을 입력하세요.");
        return;
        }
        console.log("New Task:", value);
        setValue("");
        setError("");
    };
    return { value, error, handleChange, handleSubmit };
};

export default useTodoForm;