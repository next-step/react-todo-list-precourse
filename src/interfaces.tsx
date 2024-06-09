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
/**
 * todoList에 todo 추가
 * @param content
 */
export interface AddTodo{
    (content: string): void;
}
/**
 * todoList의 n번째 todo를 삭제하는 함수
 * @param index 
 */
export interface RemoveTodo{
    (index: number): void;
}