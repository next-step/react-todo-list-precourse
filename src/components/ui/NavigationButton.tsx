import { Dispatch, SetStateAction } from "react";
import { Button } from "./Button";

interface NavigationButonprops {
  curFilter: Filter;
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
}

export const NavigationButon = ({
  curFilter,
  filter,
  setFilter,
}: NavigationButonprops) => {
  const isCurFilter = curFilter === filter;

  return (
    <Button
      onClick={() => setFilter(filter)}
      variant="ghost"
      active={isCurFilter}
    >
      {filter}
    </Button>
  );
};
