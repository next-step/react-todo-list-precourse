import { useCallback, useEffect, useState } from "react";

const initState = {
    draggedFrom: null,
    draggedTo: null,
    isDragging: false,
};

const createDragStartHandler = (setDragAndDrop) => (itemId) => (e) => {
    e.target.style.opacity = "0.4";
    e.dataTransfer.effectAllowed = 'move';
    setDragAndDrop(prev => ({...prev, isDragging: true, draggedFrom: itemId}));
};

const createDragOverHandler = (setDragAndDrop) => (itemId) => {
    let throttling = false;

    return (e) => {
        if (throttling) return;
        /*
        bottom: 325.966796875
        height: 28.7890625
        left: 386.845703125
        right: 415.634765625
        top: 297.177734375
        width: 28.7890625
        x: 386.845703125
        y: 297.177734375
         */
        console.log(e.target.getBoundingClientRect());
        setDragAndDrop(prev => ({...prev, draggedTo: itemId}));
        setTimeout(() => throttling = false, 100);
    }
}

const createDragEndHandler = (setDragAndDrop) => (itemId) => (e) => {
    e.target.style.opacity = "1";
    // setDragAndDrop(initState);
    setDragAndDrop(prev => ({...prev, isDragging: false}));
}

export function useDragAndDrop(rearrangeTodos) {
    const [dragAndDrop, setDragAndDrop] = useState(initState);
    const onDragStart = useCallback(createDragStartHandler(setDragAndDrop), []);
    const onDragOver = useCallback(createDragOverHandler(setDragAndDrop), []);
    const onDragEnd = useCallback(createDragEndHandler(setDragAndDrop), []);
    useEffect(() => {
        if (dragAndDrop.isDragging) return;
        if (dragAndDrop.draggedFrom !== null && dragAndDrop.draggedTo !== null) {
            rearrangeTodos(dragAndDrop.draggedFrom, dragAndDrop.draggedTo);
            setDragAndDrop(initState);
        }
    }, [dragAndDrop]);
    return { onDragStart, onDragOver, onDragEnd };
}