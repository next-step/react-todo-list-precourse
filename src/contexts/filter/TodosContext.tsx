import { createContext } from "react";

interface FilterContextType {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined,
);
