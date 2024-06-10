// 새로운 할 일을 추가하고 입력 필드를 초기화하는 함수
const addAndResetTodo = (inputValue, addTodo, setInputValue) => {
  addTodo(inputValue);
  setInputValue("");
};

export default addAndResetTodo;
