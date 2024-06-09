import React from 'react';
import './newTodo.styles.css';
import { Texting } from './Texting';

const NewTodo = ({ setNewTodo }) => {
    const { texting, onChangeText, onEnterSubmitHandler, onButtonSubmitHandler } = Texting(setNewTodo);

    return (
        <div className="newtodo">
            <input type="text" value={texting} placeholder="What needs to be done?" onChange={onChangeText} onKeyDown={onEnterSubmitHandler} />
            {texting && <button onClick={onButtonSubmitHandler}>ADD</button>}
        </div>
    );
}

export default NewTodo;