import { useContext } from "react";
import { FilterContext } from "./TodosContext";

export const useFilter = () => {
  const context = useContext(FilterContext);

  if (context === undefined) {
    throw new Error("FilterProvide를 반드시 사용해야합니다.");
  }

  return context;
};
