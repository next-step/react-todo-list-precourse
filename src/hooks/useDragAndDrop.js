import { useCallback, useEffect, useRef, useState } from "react";

const initState = {
    draggedFrom: null,
    draggedTo: null,
    isDragging: false,
};

const createDragStartHandler = (setDragAndDrop, ref) => (itemId) => (e) => {
    e.target.style.opacity = "0.4";
    e.dataTransfer.effectAllowed = 'move';
    if (ref.current) {
        const { width } = e.target.parentElement.getBoundingClientRect()
        ref.current.style.width = `${width}px`;
    }
    setDragAndDrop(prev => ({...prev, isDragging: true, draggedFrom: itemId}));
};

const createDragOverHandler = (setDragAndDrop, ref) => (itemId) => {
    let throttling = false;
    return (e) => {
        if (throttling) return;
        if (ref.current) {
            const { left, top, bottom, height } = e.target.parentElement.getBoundingClientRect();
            ref.current.style.left = `${left}px`;
            ref.current.style.top = `${top + height/2 > e.clientY ? top - 3 : bottom + 3}px`;
        }
        setDragAndDrop(prev => ({...prev, draggedTo: itemId}));
        setTimeout(() => throttling = false, 200);
    }
}

const createDragEndHandler = (setDragAndDrop, ref) => (itemId) => (e) => {
    if (ref.current) {
        ref.current.style.top = `-9999px`;
        ref.current.style.width = "0px";
    }
    e.target.style.opacity = "1";
    setDragAndDrop(prev => (prev.id === itemId ? initState : {...prev, isDragging: false}));
}

export function useDragAndDrop(rearrangeTodos) {
    const [dragAndDrop, setDragAndDrop] = useState(initState);
    const portalRef = useRef();
    const onDragStart = useCallback(createDragStartHandler(setDragAndDrop, portalRef), []);
    const onDragOver = useCallback(createDragOverHandler(setDragAndDrop, portalRef), []);
    const onDragEnd = useCallback(createDragEndHandler(setDragAndDrop, portalRef), []);
    useEffect(() => {
        if (dragAndDrop.isDragging) return;
        if (dragAndDrop.draggedFrom === null || dragAndDrop.draggedTo == null) return;
        if (dragAndDrop.draggedFrom === dragAndDrop.draggedTo) return;
        rearrangeTodos(dragAndDrop.draggedFrom, dragAndDrop.draggedTo);
        setDragAndDrop(initState);
    }, [dragAndDrop]);
    return { onDragStart, onDragOver, onDragEnd, portalRef };
}