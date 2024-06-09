const handleCompleteChange = (setTodoData,id) => {
    setTodoData(prev => prev.map(todo =>
           todo.id === id ? {...todo, completed: !todo.completed} : todo 
        ))
    };

    export default handleCompleteChange;
