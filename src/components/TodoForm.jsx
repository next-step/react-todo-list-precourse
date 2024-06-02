import React, { useState } from "react";

const TodoForm = () => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("New Task:", value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="할 일 작성"
            />
            <button type="submit">등록</button>
        </form>
    );
};

export default TodoForm;
