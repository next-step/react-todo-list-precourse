import { Dispatch, SetStateAction } from "react";
import { NavigationButon } from "./NavigationButton";

interface NavigationProps {
  curFilter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
}

export const Navigation = ({ curFilter, setFilter }: NavigationProps) => {
  const filters: Filter[] = ["모두", "진행중", "완료"];

  return (
    <nav>
      {filters.map((filter, index) => (
        <NavigationButon
          key={index}
          curFilter={curFilter}
          filter={filter}
          setFilter={setFilter}
        />
      ))}
    </nav>
  );
};
