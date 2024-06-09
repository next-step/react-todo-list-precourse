import { useState } from "react";

import { AddTodo } from "../interfaces";
import "../styles/inputTodo.css"

const InputTodo = ({ addTodo }: { addTodo: AddTodo }) => {
    const [content, setContent] = useState<string>("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(""===content) return;
        addTodo(content);
        setContent("");
    }
    return <form className="inputTodo" onSubmit={handleSubmit}>
        <input type="text" value={content} onChange={e => {setContent(e.currentTarget.value)}}/>
        <button type="submit">할 일 등록</button>
    </form>;
}

export default InputTodo;