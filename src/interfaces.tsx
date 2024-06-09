export interface Todo {
    id: number;
    done: boolean;
    content: string;
}

export interface ChangeNthTodo{
    (index: number, value: Todo): void;
}