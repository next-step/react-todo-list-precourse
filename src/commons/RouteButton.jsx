import { PATH_ALL } from "../constants.js";

const createFilterName = (path) => {
    if (path === PATH_ALL) {
        return "All";
    }
    return path.charAt(2).toUpperCase() + path.slice(3);
}

export function RouteButton({ path, updatePathName }) {
    return <button onClick={() => updatePathName(path)}>{createFilterName(path)}</button>
}