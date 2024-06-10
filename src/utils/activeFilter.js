// 할 일 목록 중 완료되지 않은 항목을 필터링하는 함수
const activeFilter = (todos) => todos.filter((todo) => !todo.completed);

export default activeFilter;
