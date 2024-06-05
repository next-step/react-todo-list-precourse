export interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

export type FilterStateType = "all" | "active" | "completed";
