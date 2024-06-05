import React from "react";

function TodoItem({ item, deleteItem, toggleItemCompletion }) {
    const handleToggleCompletion = () => {
        toggleItemCompletion(item.id);
    };

    const handleDeleteItem = () => {
        deleteItem(item.id);
    };

    return (
        <div style={{ textDecoration: item.completed ? "line-through" : "none" }}>
            {item.text}
            <button onClick={handleToggleCompletion}>
                {item.completed ? "취소" : "완료"}
            </button>
            <button onClick={handleDeleteItem}>삭제</button>
        </div>
    );
}

export default TodoItem;