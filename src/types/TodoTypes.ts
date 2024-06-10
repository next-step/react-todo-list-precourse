export type FilterType = 'all' | 'active' | 'completed';

export interface TodoListItemTypes {
  no: number;
  todo: string;
  done: boolean;
}

export interface TodoListContextValueTypes {
  state: { todoList: Array<TodoListItemTypes>; filter: FilterType };
  actions: {
    addTodo: (todo: string) => void;
    removeTodo: (no: number) => void;
    toggleDone: (no: number) => void;
    clearCompleted: () => void;
    selectFilter: (filter: FilterType) => void;
  };
}
