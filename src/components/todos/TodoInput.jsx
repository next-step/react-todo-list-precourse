import { forwardRef, useRef } from "react";
import styles from "../../styles/todos/TodoInput.module.css";

const handleBlur = (e) => {
    e.preventDefault();
    e.target.value = "";
}

// function (Component)
const TodoInputTyping = forwardRef(
    function (props, ref) {
    return(
        <input
            className={styles.todoInput__type}
            id={"input_id"}
            ref={ref}
        />
    )}
);

function TodoInputCap() {
    return (
        <label htmlFor={"input_id"}>Type Here: </label>
    );
}

function TodoInputSubmit() {
    return (
        <button className={styles.todoSubmitButton} >add</button>
    );
}

const handleSubmit = (e, addTodo, inputRef) => {
    e.preventDefault();
    if ((inputRef?.current?.value?.trim()?.length ?? 0) === 0) {
        return;
    }
    addTodo(inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.blur();
}

export function TodoInput({ addTodo }) {
    const inputRef = useRef();
    return (
        <form className={styles.todoInput} onSubmit={(e) => handleSubmit(e, addTodo, inputRef)}>
            <TodoInputTyping ref={inputRef} />
            <TodoInputCap />
            <TodoInputSubmit />
        </form>
    );
}