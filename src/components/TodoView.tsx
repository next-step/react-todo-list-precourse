import { Todo, ToggleTodoDone } from "../interfaces";

const TodoEl = ({ todo, index, toggleTodoDone }: { todo: Todo, index: number, toggleTodoDone: ToggleTodoDone }) => {
    return <li>
        <input type="checkbox" checked={todo.done} onChange={() => toggleTodoDone(index)} name={`todo${todo.id}`}/>
        <label htmlFor={`todo${todo.id}`}>{todo.content}</label>
    </li>
};

/**
 * todo 리스트 컴포넌트
 * @param todoList todo 리스트 데이터
 * @returns 
 */
const TodoView = ({ todoList, toggleTodoDone }: { todoList:Todo[], toggleTodoDone: ToggleTodoDone }) => {
    return <ul>{todoList.map((todo, index) => 
        <TodoEl key={todo.id} todo={todo} index={index} toggleTodoDone={toggleTodoDone}/>
    )}</ul>;
};

export default TodoView;