export default class Todo {
  public static TODO_LAST_ID_KEY = 'todo_last_id';
  public static TODOS_JSON_KEY = 'todo_json';
  private static lastId: number = sessionStorage.getItem(Todo.TODO_LAST_ID_KEY)
    ? parseInt(sessionStorage.getItem(Todo.TODO_LAST_ID_KEY) as string) + 1
    : 0;
  public id: number;
  public content: string;
  public isCompleted: boolean;
  public static nextId() {
    sessionStorage.setItem(Todo.TODO_LAST_ID_KEY, Todo.lastId.toString());
    return Todo.lastId++;
  }
  public constructor(content: string) {
    this.id = Todo.nextId();
    this.content = content;
    this.isCompleted = false;
  }
  public toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }
  public setContent(content: string) {
    this.content = content;
  }
}
