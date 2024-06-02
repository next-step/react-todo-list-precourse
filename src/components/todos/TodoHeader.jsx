import { PATH_ACTIVE, PATH_ALL, PATH_COMPLETED } from "../../constants.js";
import { RouteButton } from "../../commons/RouteButton.jsx";
import { memo } from "react";
import styles from "../../styles/todos/TodoHeader.module.css"

function TodoHeader({ updatePathName }) {
    const paths = [PATH_ALL, PATH_ACTIVE, PATH_COMPLETED];
    console.log('header');
    return (
        <ul className={styles.filter}>
            {paths.map(path => <li key={path}><RouteButton path={path} updatePathName={updatePathName} /></li>)}
        </ul>
    );
}

export default memo(TodoHeader);