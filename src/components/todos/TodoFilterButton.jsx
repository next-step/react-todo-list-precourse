import { PATH_ALL } from "../../constants.js";
// import styles from "../../styles/todos/TodoFilterButton.module.css"

const createFilterName = (path) => {
    if (path === PATH_ALL) {
        return "All";
    }
    return path.charAt(2).toUpperCase() + path.slice(3);
}

const createPathTrigger = (path, updatePathName) => () => updatePathName(path)

const handleClick = (pathTrigger) => (e) => {
    if (!e.target.checked) {
        e.preventDefault();
        return;
    }
    pathTrigger();
}

export function TodoFilterButton({ path, updatePathName }) {
    console.log(path);
    return (
            // <label className={styles.filterButton}>
            <label >
                <input
                    type="checkbox"
                    name="filter"
                    value={path}
                    onClick={handleClick(createPathTrigger(path, updatePathName))}
                />
                {/*<div className={styles.filterButton__checkmark}></div>*/}
                <div></div>
                {createFilterName(path)}
            </label>
    );
}