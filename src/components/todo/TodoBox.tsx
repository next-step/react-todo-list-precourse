import Todo from '../../models/Todo.ts';
import TodoFilterEnum from '../../constants/TodoFilterEnum.ts';

type TodoRepository = {
  [id: number]: Todo;
};
type TodoBoxProps = {
  todos: TodoRepository,
  filter: TodoFilterEnum,
  removeTodo: (id: number) => void,
  handleToggleCompletion: (todo: Todo) => void,
};
const TodoBox = ({ todos, filter, removeTodo, handleToggleCompletion }: TodoBoxProps) => {
};
export default TodoBox;
