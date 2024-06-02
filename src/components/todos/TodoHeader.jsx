import { PATH_ACTIVE, PATH_ALL, PATH_COMPLETED } from "../../constants.js";
import { TodoFilterButton } from "./TodoFilterButton.jsx";
import { memo } from "react";
import styles from "../../styles/todos/TodoHeader.module.css"

const paths = [PATH_ALL, PATH_ACTIVE, PATH_COMPLETED];

function TodoHeader({ currentPath, updatePathName }) {
    console.log('header');
    return (
        <ul className={styles.filter}>
            {paths.map(path => <TodoFilterButton path={path} updatePathName={updatePathName} />)}
        </ul>
    );
}

export default memo(TodoHeader);