import { Text } from "../ui/Text";
import { TodoForm } from "./TodoForm";

export const Header = () => {
  return (
    <header>
      <Text variant="primary" size="2xl">
        To Do List
      </Text>
      <TodoForm />
    </header>
  );
};
