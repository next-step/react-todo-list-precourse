import React from "react";
import useTodoForm from "./useTodoForm.jsx";
import ErrorMessage from "./ErrorMessage.jsx";

const TodoForm = ({ addTodo }) => {
    const { value, error, handleChange, handleSubmit } = useTodoForm(addTodo);

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="할 일 작성"
            />
            <button type="submit">등록</button>
            <ErrorMessage message={error} />
        </form>
    );
};

export default TodoForm;