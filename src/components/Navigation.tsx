import { NavigationButon } from "./NavigationButton";

export const Navigation = () => {
  const filters: Filter[] = ["모두", "진행중", "완료"];

  return (
    <nav>
      {filters.map((filter, index) => (
        <NavigationButon key={index} curFilter={filter} />
      ))}
    </nav>
  );
};
