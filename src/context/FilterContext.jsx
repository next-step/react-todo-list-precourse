import { createContext } from "react";
import { useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [viewState, setViewState] = useState("All");
  return (
    <FilterContext.Provider value={{ viewState, setViewState }}>
      {children}
    </FilterContext.Provider>
  );
};
