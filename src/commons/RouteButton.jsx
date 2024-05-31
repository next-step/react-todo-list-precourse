import { createFilterName } from "../components/TodoList.jsx";

export function RouteButton({ path, updatePathName }) {
    const handleClick = () => updatePathName(path);
    return <button onClick={handleClick}>{createFilterName(path)}</button>
}