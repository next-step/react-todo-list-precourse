// 이벤트의 기본 동작을 막고, 입력 값이 유효한지 확인한 후 할 일을 추가하고 입력값을 리셋하는 함수
import preventDefault from "../utils/preventDefault";
import validateInputValue from "../utils/validateInputValue";
import addAndResetTodo from "../utils/addAndResetTodo";

const handleFormSubmit = (e, inputValue, addTodo, setInputValue) => {
  preventDefault(e);
  if (validateInputValue(inputValue)) {
    addAndResetTodo(inputValue, addTodo, setInputValue);
  }
};

export default handleFormSubmit;
