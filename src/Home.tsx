import { useState, useEffect } from "react";
import { Todo } from "./interfaces/todo";

/**
 * Todo 홈페이지 컴포넌트
 * + todoList state 관리
 */
const Home = () => {
    const [todoList, setTodoList] = useState<Todo[]>([]);

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
    ]
    useEffect(() => {
        setTodoList(dummyData);
    },[])

    return(
        <div>
            dldl
            {/* <Header />
            <Input />
            <TodoView /> */}
        </div>
    );
};

export default Home;