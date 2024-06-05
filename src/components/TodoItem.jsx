import React from "react";

function TodoItem({ item, index, deleteItem, toggleItemCompletion }) {
    return (
        <div style={{ textDecoration: item.completed ? "line-through" : "none" }}>
            {item.text}
            <button onClick={() => toggleItemCompletion(index)}>
                {item.completed ? "취소" : "완료"}
            </button>
            <button onClick={() => deleteItem(index)}>삭제</button>
        </div>
    );
}

export default TodoItem;