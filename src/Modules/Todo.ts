export interface Todo {
  text: string;
  status: "completed" | "active";
}

export type FilterStateType = "all" | "active" | "completed";
