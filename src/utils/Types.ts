import Todo from '../models/Todo';

type TodoRepository = {
  [id: number]: Todo;
};

export type { TodoRepository };
