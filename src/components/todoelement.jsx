import React from 'react';

function makeCheckbox(todo) {
    if (todo.isCompleted) {
        return (<input type="checkbox" className="completebtn" checked/>)
    } else {
        return (<input type="checkbox" className="completebtn"/>)
    }
}

function makeContent(todo) {
    if (todo.isCompleted) {
        return (<p className="completed">{ todo.content }</p>)
    } else {
        return (<p>{ todo.content }</p>)
    }
}

function TodoElement(props) {
    const handleClick = e => {
        props.deleteTodo(props.key);
    };

    return (
        <div className="todoelement">
            { makeCheckbox(props.todo) }
            { makeContent(props.todo) }
            <button className="deletebtn" onClick={handleClick}>x</button>
        </div>
    );
}

export default TodoElement;