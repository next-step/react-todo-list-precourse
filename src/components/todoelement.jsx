import React from 'react';

function makeCheckbox(todo, changeCompleted) {
    const handleClick = e => {
        changeCompleted(todo.id);
    };

    
    return (<input type="checkbox" className="completebtn" onClick={handleClick} checked={todo.isCompleted}/>);
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
        props.deleteTodo(props.todo.id);
    };

    return (
        <div className="todoelement">
            { makeCheckbox(props.todo, props.changeCompleted) }
            { makeContent(props.todo) }
            <button className="deletebtn" onClick={handleClick}>x</button>
        </div>
    );
}

export default TodoElement;