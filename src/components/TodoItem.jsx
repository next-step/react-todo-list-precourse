import React from "react";

function TodoItem(props) {
    return (
        <div>
            {props.item}
            <button onClick={() => props.deleteItem(props.index)}>삭제</button>
        </div>
    );
}
export default TodoItem