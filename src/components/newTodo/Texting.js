import { useState } from 'react';
import { onChangeText } from './ChangeTexting';
import { onEnterSubmitHandler } from './EnterSubmit';
import { onButtonSubmitHandler } from './ButtonSubmit';

export const Texting = (setNewTodo) => {
    const [texting, setTexting] = useState('');

    const changeText = onChangeText(setTexting);
    const enterSubmitHandler = onEnterSubmitHandler(texting, setNewTodo, setTexting);
    const buttonSubmitHandler = onButtonSubmitHandler(texting, setNewTodo, setTexting);

    return { texting, onChangeText: changeText, onEnterSubmitHandler: enterSubmitHandler, onButtonSubmitHandler: buttonSubmitHandler };
};