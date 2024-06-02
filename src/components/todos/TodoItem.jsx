import { memo, useState} from "react";
import styles from "../../styles/todos/TodoItem.module.css";

const switchToInput = (setIsEditing, isDone) => {
    if (isDone) {
        return;
    }
    setIsEditing(true);
}

function Content({ isDone, setIsEditing, content }) {
    return (
        <div
            className={styles.content}
            onDoubleClick={() => switchToInput(setIsEditing, isDone)}
            title={isDone ? "not allowed to change content when task is done!" : ""}
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

function TodoItem({ todo, updateTodoState, deleteTodo } ){
    const [isEditing, setIsEditing] = useState(false);
    const { id, content, isDone } = todo;
    console.log(id);
    return (
        <div className={styles.todoItem}>
            <TodoButton handleOnClick={triggerUpdate(updateTodoState, todo, isDone)} text={isDone ? 'isDone!' : 'notYet!'} />
            {isEditing
                ? <VariableContent updateTodoState={updateTodoState} todo={todo} setIsEditing={setIsEditing} />
                : <Content isDone={isDone} setIsEditing={setIsEditing} content={content} />
            }
            <TodoButton handleOnClick={triggerDelete(deleteTodo, id)} text="delete" />
        </div>
    );
}

export default memo(TodoItem);