import React from "react";
import "../styles/DeleteBtn.css";

const DeleteBtn = ({ onDelete, id }) => {
    return (
        <button onClick={() => onDelete(id)} className="delete-btn">
            x
        </button>
    );
}

export default DeleteBtn;