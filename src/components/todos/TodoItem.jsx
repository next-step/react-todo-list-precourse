import { memo, useState } from "react";

const handleKeyDown = (e, updateTodoState, oldTodo, setIdEditing) => {
    if (e.target.value.trim().length > 0 && e.key === "Enter") {
        updateTodoState({...oldTodo, content: e.target.value});
        e.target.value = "";
        setIdEditing(false);
    }
}

function TodoItem({ todo, updateTodoState, deleteTodo } ){
    const [isEditing, setIdEditing] = useState(false);
    const { id, content, isDone } = todo;
    console.log(id);
    return (
        <div>
            {isEditing
                ? <input autoFocus={true} onKeyDown={(e) => handleKeyDown(e, updateTodoState, todo, setIdEditing)} />
                : <div onDoubleClick={() => setIdEditing(true)}>{content}</div>
            }
            <button onClick={() => updateTodoState({...todo, isDone: !isDone})}>{isDone ? 'isDone!' : 'notYet!'}</button>
            <button onClick={() => deleteTodo(id)}>delete</button>
        </div>
    );
}

export default memo(TodoItem);