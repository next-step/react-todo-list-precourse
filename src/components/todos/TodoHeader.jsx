import { PATH_ACTIVE, PATH_ALL, PATH_COMPLETED } from "../../constants.js";
import { TodoFilterButton } from "./TodoFilterButton.jsx";
import { forwardRef, memo, useEffect, useRef } from "react";
import styles from "../../styles/todos/TodoHeader.module.css"
import { createPortal } from "react-dom";

const paths = [PATH_ALL, PATH_ACTIVE, PATH_COMPLETED];

const uncheckOthers = (refs) => (me) => refs.forEach((ref, i) => {
    if (me !== paths[i]) {
        refs[i].current.checked = false;
    }
});

const checkDefaultOnMount = (refs) => () => { refs[0].current.checked = true };

const ItemDropDestination = forwardRef(function ({...props}, ref) {
    console.log('portal');
    return (
        createPortal(
            <div className={styles.todolist_dragDest} ref={ref}></div>, document.body
        )
    )
})

//TodoList로부터 path를 props로 받아오면 그냥 전부다 계속 리렌더됨
function TodoHeader({ updatePathName, portalRef }) {
    const refs = [useRef(), useRef(), useRef()];
    useEffect(checkDefaultOnMount(refs), []);
    return (
        <div className={styles.filter}>
            {paths.map((path, i) => <TodoFilterButton
                key={path}
                path={path}
                updatePathName={updatePathName}
                ref={refs[i]}
                uncheckOthers={uncheckOthers(refs)}/>)
            }
            <ItemDropDestination ref={portalRef} />
        </div>
    );
}

export default memo(TodoHeader);