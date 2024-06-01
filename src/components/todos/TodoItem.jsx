import { memo, useState } from "react";

const switchToInput = (setIsEditing, isDone) => {
    if (isDone) {
        return;
    }
    setIsEditing(true);
}

function Content({ isDone, setIsEditing, content }) {
    return (
        <div
            style={{textDecoration: isDone ? "line-through" : ""}}
            onDoubleClick={() => switchToInput(setIsEditing, isDone)}
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
        <input
            autoFocus={true}
            onKeyDown={(e) => handleKeyDown(e, updateTodoState, todo, setIsEditing)}
            onBlur={(e) => handleBlue(e, setIsEditing)}
            title="press enter to submit"
        />
    );
}

const triggerUpdate = (updateTodoState, todo, isDone) => () => updateTodoState({...todo, isDone: !isDone});

const triggerDelete = (deleteTodo, id) => () => deleteTodo(id)

function TodoButton({ handleOnClick, text }) {
    return (
        <button onClick={handleOnClick}>{text}</button>
    );
}

function TodoItem({ todo, updateTodoState, deleteTodo } ){
    const [isEditing, setIsEditing] = useState(false);
    const { id, content, isDone } = todo;
    console.log(id);
    return (
        <div>
            {isEditing
                ? <VariableContent updateTodoState={updateTodoState} todo={todo} setIsEditing={setIsEditing} />
                : <Content isDone={isDone} setIsEditing={setIsEditing} content={content} />
            }
            <TodoButton handleOnClick={triggerUpdate(updateTodoState, todo, isDone)} text={isDone ? 'isDone!' : 'notYet!'} />
            <TodoButton handleOnClick={triggerDelete(deleteTodo, id)} text="delete" />
        </div>
    );
}

export default memo(TodoItem);