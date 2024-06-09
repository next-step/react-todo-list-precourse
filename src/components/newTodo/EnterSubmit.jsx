import { useCallback } from 'react';

export const onEnterSubmitHandler = (texting, setNewTodo, setTexting) => useCallback((e) => {
    if (e.key === 'Enter' && texting) {
        setNewTodo(texting);
        setTexting('');
    }
}, [texting, setNewTodo]);