import { useFilter } from "../contexts/filter/useFilter";
import { Button } from "./ui/Button";

interface NavigationButonprops {
  curFilter: Filter;
}

export const NavigationButon = ({ curFilter }: NavigationButonprops) => {
  const { filter, setFilter } = useFilter();
  const isCurFilter = curFilter === filter;

  return (
    <Button
      onClick={() => setFilter(curFilter)}
      variant="ghost"
      active={isCurFilter}
    >
      {curFilter}
    </Button>
  );
};
