import { memo, useRef, useState } from "react";
import styles from "../../styles/todos/TodoItem.module.css";
import { useTypingEffect } from "../../hooks/useTypingEffect.js";

const switchToInput = (setIsEditing, isDone) => {
    if (isDone) {
        return;
    }
    setIsEditing(true);
}

function Content({ isDone, setIsEditing, content }) {
    const divRef = useRef();
    useTypingEffect(divRef, isDone, content);
    return (
        <div
            className={`${styles.content} ${isDone ? styles.stop : null}`}
            onDoubleClick={() => switchToInput(setIsEditing, isDone)}
            title={isDone ? "not allowed to change content when task is done!" : ""}
            ref={divRef}
        >
            {content}
        </div>
    );
}

const handleKeyDown = (e, updateTodoState, oldTodo, setIdEditing) => {
    if (e.target.value.trim().length > 0 && e.key === "Enter") {
        updateTodoState({...oldTodo, content: e.target.value});
        e.target.value = "";
        setIdEditing(false);
    }
}

const handleBlue = (e, setIsEditing) => {
    e.preventDefault();
    setIsEditing(false);
    e.target.value = "";
}

function VariableContent({ updateTodoState, todo, setIsEditing}) {
    return (
        <div className={styles.todoItem__VC}>
            <input
                className={styles.todoItem__VC__input}
                autoFocus={true}
                onKeyDown={(e) => handleKeyDown(e, updateTodoState, todo, setIsEditing)}
                onBlur={(e) => handleBlue(e, setIsEditing)}
                id={todo.id}
            />
            <label htmlFor={todo.id}>Press Enter to Submit</label>
        </div>
    );
}

const triggerUpdate = (updateTodoState, todo, isDone) => () => updateTodoState({...todo, isDone: !isDone});

const triggerDelete = (deleteTodo, id) => () => deleteTodo(id)

function TodoButton({ handleOnClick, text }) {
    return (
        <button className={styles.todoItem__VC__button} onClick={handleOnClick}>{text}</button>
    );
}

const createStateText = (isDone) => {
    return isDone ? "Completed" : "Active";
}

function StateTodoButton({ updateTodoState, todo, isDone }) {
    return (
        <button
            className={`${styles.todoItem__VC__button} ${isDone ? styles.done : null}`}
            onClick={triggerUpdate(updateTodoState, todo, isDone)}
        >
            {createStateText(isDone)}
        </button>
    );
}

function DragButton() {
    return (
        <img
            className={styles.todoItem__VC__drag}
            src="/public/drag-handle-svgrepo-com.svg"
            alt="drag and drop to rearrange"
            draggable={false}
        />
    );
}

function TodoItem({ todo, updateTodoState, deleteTodo, onDragStart, onDragOver, onDragEnd }){
    const [isEditing, setIsEditing] = useState(false);
    const { id, content, isDone } = todo;
    return (
        <div className={styles.todoItem} draggable={true} onDragStart={onDragStart(id)} onDragOver={onDragOver(id)} onDragEnd={onDragEnd(id)}>
            <DragButton />
            <StateTodoButton updateTodoState={updateTodoState} todo={todo} isDone={isDone} />
            {isEditing
                ? <VariableContent updateTodoState={updateTodoState} todo={todo} setIsEditing={setIsEditing} />
                : <Content isDone={isDone} setIsEditing={setIsEditing} content={content} />
            }
            <TodoButton handleOnClick={triggerDelete(deleteTodo, id)} text="delete" />
        </div>
    );
}

export default memo(TodoItem);