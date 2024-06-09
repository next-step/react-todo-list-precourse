import { Todo } from "../interfaces/todo";

const TodoEl = ({ todo }: { todo: Todo }) => {
    return <li>
        <input type="checkbox" checked={todo.done} name={`todo${todo.id}`}/>
        <label htmlFor={`todo${todo.id}`}>{todo.content}</label>
    </li>
};

/**
 * todo 리스트 컴포넌트
 * @param todoList todo 리스트 데이터
 * @returns 
 */
const TodoView = ({ todoList }: { todoList:Todo[] }) => {
    return <ul>{todoList.map(todo => 
        <TodoEl key={todo.id} todo={todo}/>
    )}</ul>;
};

export default TodoView;