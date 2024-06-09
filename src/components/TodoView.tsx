import { RemoveTodo, Todo, ToggleTodoDone } from "../interfaces";

const TodoEl = ({ todo, index, toggleTodoDone, removeTodo }: { todo: Todo, index: number, toggleTodoDone: ToggleTodoDone, removeTodo: RemoveTodo }) => {
    return <li>
        <input type="checkbox" checked={todo.done} onChange={() => toggleTodoDone(index)} name={`todo${todo.id}`}/>
        <label htmlFor={`todo${todo.id}`}>{todo.content}</label>
        <button onClick={() => removeTodo(index)}>삭제</button>
    </li>
};

/**
 * todo 리스트 컴포넌트
 * @param todoList todo 리스트 데이터
 * @returns 
 */
const TodoView = ({ todoList, toggleTodoDone, removeTodo }: { todoList:Todo[], toggleTodoDone: ToggleTodoDone, removeTodo: RemoveTodo }) => {
    return <ul>{todoList.map((todo, index) => 
        <TodoEl key={todo.id} todo={todo} index={index} toggleTodoDone={toggleTodoDone} removeTodo={removeTodo}/>
    )}</ul>;
};

export default TodoView;