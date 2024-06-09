const handleClick = (setTodoData, id) => {
    setTodoData(prev => prev.filter(todo => todo.id !== id));
}

export default handleClick;