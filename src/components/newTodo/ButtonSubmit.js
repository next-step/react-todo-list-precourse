import { useCallback } from 'react';

export const onButtonSubmitHandler = (texting, setNewTodo, setTexting) => useCallback(() => {
    if (texting) {
        setNewTodo(texting);
        setTexting('');
    }
}, [texting, setNewTodo]);