import { Fragment, memo } from "react";

function TodoItem({ todo, updateTodoState, deleteTodo } ){
    const { id, content, isDone } = todo;
    console.log(id);
    return (
        <Fragment>
            <div>{content}</div>
            <button onClick={() => updateTodoState(id)}>{isDone ? 'done!' : 'yet!'}</button>
            <button onClick={() => deleteTodo(id)}>delete</button>
        </Fragment>
    );
}

export default memo(TodoItem);