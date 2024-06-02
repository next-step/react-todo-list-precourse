import { PATH_ALL } from "../../constants.js";
import styles from "../../styles/todos/TodoFilterButton.module.css"
import { forwardRef } from "react";

const createFilterName = (path) => {
    if (path === PATH_ALL) {
        return "All";
    }
    return path.charAt(2).toUpperCase() + path.slice(3);
}

const createPathTrigger = (path, updatePathName, uncheckOthers) => () => {
    updatePathName(path);
    uncheckOthers(path)
}

const handleClick = (pathTrigger) => (e) => {
    if (!e.target.checked) {
        e.preventDefault();
        return;
    }
    pathTrigger();
}

// function (Component)
export const TodoFilterButton =  forwardRef(
    function ({ path, updatePathName, uncheckOthers } , ref) {
        return (
            <label className={styles.filterButton}>
                <input type="checkbox" name="filter" value={path} ref={ref}
                       onClick={handleClick(createPathTrigger(path, updatePathName, uncheckOthers))}
                />
                <div className={styles.filterButton__checkmark}></div>
                {createFilterName(path)}
            </label>
        );
    }
);