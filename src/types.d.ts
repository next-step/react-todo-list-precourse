type Todo = {
  text: string;
  done: boolean;
};

type TodosAction =
  | { type: "ADD_TODO"; text: string }
  | { type: "TOGGLE_TODO"; id: number }
  | { type: "REMOVE_TODO"; id: number }
  | { type: "REMOVE_DONE_TODOS" };

type Filter = "모두" | "완료" | "진행중";
