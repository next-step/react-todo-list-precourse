interface TodoLabelProps {
  todo: Todo;
  index: number;
}

export const TodoLabel = ({ todo, index }: TodoLabelProps) => {
  return (
    <label
      className={todo.done ? "done-todo" : ""}
      htmlFor={`checkbox-${index}`}
    >
      {todo.text}
    </label>
  );
};
