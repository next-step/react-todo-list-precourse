import { useState } from "react";

import { AddTodo } from "../interfaces";

const InputTodo = ({ addTodo }: { addTodo: AddTodo }) => {
    const [content, setContent] = useState<string>("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo(content);
        setContent("");
    }
    return <form onSubmit={handleSubmit}>
        <input type="text" value={content} onChange={e => {setContent(e.currentTarget.value)}}/>
        <button type="submit">할 일 등록</button>
    </form>;
}

export default InputTodo;