import { Fragment, useState } from "react";

const handleKeyDown = (e, addTodo, setValue) => {
    if (e.target.value.trim().length === 0) {
        return;
    }
    if (e.keyCode === 13) {
        addTodo(e.target.value);
        e.target.value = "";
        setValue("");
        return;
    }
    setValue(e.target.value);
}

export function TodoInput({ addTodo }) {
    const [value, setValue] = useState("");
    return (
        <Fragment>
            <label htmlFor={"input_id"}>{value}</label>
            <input id={"input_id"} onKeyDown={(e) => handleKeyDown(e, addTodo, setValue)}/>
        </Fragment>
    );
}