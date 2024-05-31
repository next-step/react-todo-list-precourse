import { useCallback, useEffect, useState } from "react";
import { PATH_ALL } from "../constants.js";
import TodoHeader from "./todos/TodoHeader.jsx";
import { TodoInput } from "./todos/TodoInput.jsx";

export const createFilterName = (path) => {
    if (path === PATH_ALL) return "All";
    return path.charAt(0).toUpperCase() + path.slice(3);
}

export function TodoList() {
    const [pathName, setPathName] = useState(PATH_ALL);
    const updatePathName = useCallback((path) => setPathName(path), []);
    useEffect(() => window.history.pushState(null, "", pathName), [pathName]);
    console.log('todolist', createFilterName(pathName));
    return (
        <div>
            <TodoHeader updatePathName={updatePathName} />
            <TodoInput />
        </div>
    );
}