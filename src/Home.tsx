import { useState, useEffect } from "react";

import { Todo } from "./interfaces";
import TodoView from "./components/TodoView";

/**
 * Todo 홈페이지 컴포넌트
 * + todoList state 관리
 */
const Home = () => {
    const [todoList, setTodoList] = useState<Todo[]>([]);
    /**
     * todoList의 n번째 todo를 변경하는 함수
     * @param index 
     */
    const changeNthTodo = (index: number, value: Todo) => {
        todoList[index]=value;
        setTodoList([...todoList]);
    }

    // TODO 테스트 용 데이터 지우기
    const dummyData: Todo[] = [
        {
            id: 1,
            done: false,
            content: 'make todo project'
        },
        {
            id: 2,
            done: true,
            content: 'clean room'
        },
    ];
    useEffect(() => {
        setTodoList(dummyData);
    },[]);

    return <div>
        {/* <Header />
        <Input /> */}
        <TodoView todoList={todoList} changeNthTodo={changeNthTodo}/>
    </div>;
};

export default Home;