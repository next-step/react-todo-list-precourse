const handleFormSubmit = (e, value, setValue, setTodoData) => {
    if(value.trim() !== "") {
      e.preventDefault();
      setTodoData(prev => [...prev, {id: Date.now(), title: value, completed: false}]);
      setValue("");
    }
  }

  export default handleFormSubmit;