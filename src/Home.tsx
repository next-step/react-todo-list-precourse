import { useState } from "react";

import { Todo, ToggleTodoDone, AddTodo } from "./interfaces";
import TodoView from "./components/TodoView";
import InputTodo from "./components/InputTodo";

/**
 * Todo 홈페이지 컴포넌트
 * + todoList state 관리
 */
const Home = () => {
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const toggleTodoDone: ToggleTodoDone = index => {
        todoList[index].done=!todoList[index].done;
        setTodoList([...todoList]);
    }
    const addTodo: AddTodo = content => {
        let nextId: number = todoList.length>0 ? todoList[todoList.length-1].id+1 : 0;
        todoList.push({id: nextId, done: false, content: content});
        setTodoList([...todoList]);
    }

    return <div>
        {/* <Header /> */}
        <InputTodo addTodo={addTodo}/>
        <TodoView todoList={todoList} toggleTodoDone={toggleTodoDone}/>
    </div>;
};

export default Home;