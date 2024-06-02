import { useRef } from "react";
import styles from "../../styles/todos/TodoInput.module.css";

const handleSubmit = (e, addTodo, inputRef) => {
    e.preventDefault();
    if ((inputRef?.current?.value?.trim()?.length ?? 0) === 0) {
        return;
    }
    addTodo(inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.blur();
}

const handleBlur = (e) => {
    e.preventDefault();
    e.target.value = "";
}

export function TodoInput({ addTodo }) {
    const inputRef = useRef();
    return (
        <form className={styles.todoInput} onSubmit={(e) => handleSubmit(e, addTodo, inputRef)}>
            <input
                className={styles.todoInput__type}
                id={"input_id"}
                ref={inputRef}
                onBlur={handleBlur}
            />
            <label htmlFor={"input_id"}>Type Here: </label>
            <button className={styles.todoSubmitButton} >add</button>
        </form>
    );
}