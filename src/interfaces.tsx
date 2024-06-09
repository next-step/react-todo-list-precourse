export interface Todo {
    id: number;
    done: boolean;
    content: string;
}

/**
 * todoList의 n번째 todo의 done 여부를 토글하는 함수
 * @param index 
 */
export interface ToggleTodoDone{
    (index: number): void;
}
export interface AddTodo{
    (content: string): void;
}