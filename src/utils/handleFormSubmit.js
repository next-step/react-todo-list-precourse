const handleFormSubmit = (setTodoData, value, setValue) => {
    setTodoData(prev => [...prev, {id:Date.now(), title : value, completed:false}])
    setValue("");
  }
  export default handleFormSubmit;