import TodoStorageKeys from '../constants/TodoStorageKeys';

export default class Todo {
  private static lastId: number = sessionStorage.getItem(TodoStorageKeys.TODO_LAST_ID_KEY)
    ? parseInt(sessionStorage.getItem(TodoStorageKeys.TODO_LAST_ID_KEY) as string) + 1
    : 0;
  public id: number;
  public content: string;
  public isCompleted: boolean;
  public static nextId() {
    sessionStorage.setItem(TodoStorageKeys.TODO_LAST_ID_KEY, Todo.lastId.toString());
    return Todo.lastId++;
  }
  public constructor(content: string, id?: number) {
    // 여기서 id에 0이 들어가면 false이기 때문에 이렇게 해야됨
    this.id = typeof id === 'undefined' ? Todo.nextId() : id;
    this.content = content;
    this.isCompleted = false;
  }
  public toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }
  public setContent(content: string) {
    this.content = content;
  }
  public static fromUnwrappedObject(unwrappedObject: object) {
    if(! ('id' in unwrappedObject) || ! ('content' in unwrappedObject)) return null;
    const content = unwrappedObject.content;
    const id = unwrappedObject.id;
    if(typeof content !== 'string' || typeof id !== 'number') return null;
    return new Todo(content, id);
  }
}
