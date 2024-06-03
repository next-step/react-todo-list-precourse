import { Text } from "../ui/Text";
import { TodoInput } from "./TodoInput";

export const Header = () => {
  return (
    <header>
      <Text variant="primary" size="2xl">
        To Do List
      </Text>
      <TodoInput />
    </header>
  );
};
