import { useState } from "react";

import { Todo, ToggleTodoDone, AddTodo, RemoveTodo } from "./interfaces";
import TodoView from "./components/TodoView";
import InputTodo from "./components/InputTodo";

/**
 * todo state 관련된 CRUD 함수
 * @param todoList 
 * @param setTodoList 
 * @returns 
 */
const TodoListFunc = (todoList: Todo[], setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>) => {
    const toggleTodoDone: ToggleTodoDone = index => {
        todoList[index].done=!todoList[index].done;
        setTodoList([...todoList]);
    }
    const addTodo: AddTodo = content => {
        let nextId: number = todoList.length>0 ? todoList[todoList.length-1].id+1 : 0;
        todoList.push({id: nextId, done: false, content: content});
        setTodoList([...todoList]);
    }
    const removeTodo: RemoveTodo = index => {
        todoList.splice(index, 1);
        setTodoList([...todoList]);
    }
    return {toggleTodoDone, addTodo, removeTodo};
}
/**
 * Todo 홈페이지 컴포넌트
 * + todoList state 관리
 */
const Home = () => {
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const {toggleTodoDone, addTodo, removeTodo} = TodoListFunc(todoList, setTodoList);

    return <div>
        {/* <Header /> */}
        <InputTodo addTodo={addTodo}/>
        <TodoView todoList={todoList} toggleTodoDone={toggleTodoDone} removeTodo={removeTodo} />
    </div>;
};

export default Home;