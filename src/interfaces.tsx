export interface Todo {
    id: number;
    done: boolean;
    content: string;
}
export interface ToggleTodoDone{
    (index: number): void;
}