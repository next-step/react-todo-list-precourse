import { PATH_ALL } from "../../constants.js";

const createFilterName = (path) => {
    if (path === PATH_ALL) {
        return "All";
    }
    return path.charAt(2).toUpperCase() + path.slice(3);
}

export function TodoFilterButton({ path, updatePathName }) {
    return (
        <li>
            <button onClick={() => updatePathName(path)}>{createFilterName(path)}</button>
        </li>
    );
}