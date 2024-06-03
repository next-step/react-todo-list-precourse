const handleKeyPress = (e, todos, setTodos, inputValue, setInputValue) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const newTodo = inputValue.trim(); // 입력된 값의 앞뒤 공백 제거
    if (newTodo !== "") { //입력된 값이 공백이 아닌 경우에만
      setTodos((prevTodos) => [...prevTodos, newTodo]); // 이전 할 일에 새로운 할 일 추가하여 리스트 업데이트
      setInputValue(""); // 입력값 초기화
    }
  }
};

export default handleKeyPress;
