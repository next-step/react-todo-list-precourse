import { PATH_ACTIVE, PATH_ALL, PATH_COMPLETED } from "../../constants.js";
import { ListButton } from "../../commons/ListButton.jsx";
import { memo } from "react";
import styles from "../../styles/todos/TodoHeader.module.css"

function TodoHeader({ updatePathName }) {
    const paths = [PATH_ALL, PATH_ACTIVE, PATH_COMPLETED];
    console.log('header');
    return (
        <ul className={styles.filter}>
            {paths.map(path => <ListButton path={path} updatePathName={updatePathName} />)}
        </ul>
    );
}

export default memo(TodoHeader);