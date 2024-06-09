import React from "react";
import { Todo, ChangeNthTodo } from "../interfaces";

const TodoEl = React.memo(({ todo, index, changeNthTodo }: { todo: Todo, index: number, changeNthTodo: ChangeNthTodo }) => {
    const toggleTodoDone = () => {
        todo.done = !todo.done;
        changeNthTodo(index, todo);
    }
    return <li>
        <input type="checkbox" checked={todo.done} onChange={toggleTodoDone} name={`todo${todo.id}`}/>
        <label htmlFor={`todo${todo.id}`}>{todo.content}</label>
    </li>
});

/**
 * todo 리스트 컴포넌트
 * @param todoList todo 리스트 데이터
 * @returns 
 */
const TodoView = ({ todoList, changeNthTodo }: { todoList:Todo[], changeNthTodo: ChangeNthTodo }) => {
    return <ul>{todoList.map((todo, index) => 
        <TodoEl key={todo.id} todo={todo} index={index} changeNthTodo={changeNthTodo}/>
    )}</ul>;
};

export default TodoView;