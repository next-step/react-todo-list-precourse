import React from 'react';

function TodoElement(props) {
    return (
        <div className="todoelement">
            <input type="checkbox" className="completebtn"/>
            <p>내용</p>
            <button className="deletebtn">x</button>
        </div>
    );
}

export default TodoElement;