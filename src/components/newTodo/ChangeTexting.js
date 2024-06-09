import { useCallback } from 'react';

export const onChangeText = (setTexting) => useCallback((e) => {
    setTexting(e.target.value);
}, []);