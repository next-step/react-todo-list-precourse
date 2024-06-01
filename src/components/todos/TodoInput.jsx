import { useRef, useState } from "react";

const handleChange = (e, addTodo, setValue) => {
    if (e.target.value.trim().length === 0) {
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

// 자주 리렌더 되는건 묶어 놓는게 효과적
export function TodoInput({ addTodo }) {
    const [value, setValue] = useState("");
    const inputRef = useRef();
    return (
        <form onSubmit={(e) => handleSubmit(e, addTodo, setValue, inputRef)}>
            {/*<label className={styles.input__monitor} htmlFor={"input_id"}>{value}</label>*/}
            {/*<div className={styles.input__monitor}>{value}</div>*/}
            <input id={"input_id"} ref={inputRef} onChange={(e) => handleChange(e, addTodo, setValue)}/>
            <button >add</button>
        </form>
    );
}