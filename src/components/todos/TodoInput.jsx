import { useRef, useState } from "react";

const handleKeyDown = (e, addTodo, setValue) => {
    if (e.target.value.trim().length === 0) {
        return;
    }
    if (e.key === "Enter") {
        addTodo(e.target.value);
        e.target.value = "";
        setValue("");
        return;
    }
    setValue(e.target.value);
}

const handleSubmit = (e, addTodo, setValue, inputRef) => {
    e.preventDefault();
    if ((inputRef?.current?.value?.trim()?.length ?? 0) === 0) {
        return;
    }
    addTodo(inputRef.current.value);
    setValue("");
    inputRef.current.value = "";
}

export function TodoInput({ addTodo }) {
    const [value, setValue] = useState("");
    const inputRef = useRef();
    return (
        <form onSubmit={(e) => handleSubmit(e, addTodo, setValue, inputRef)}>
            <label htmlFor={"input_id"}>{value}</label>
            <input id={"input_id"} ref={inputRef} onKeyDown={(e) => handleKeyDown(e, addTodo, setValue)}/>
            <button >add</button>
        </form>
    );
}