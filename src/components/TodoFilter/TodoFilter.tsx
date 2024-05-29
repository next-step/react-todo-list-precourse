import { useEffect, useState } from "react";
import { FilterStateType } from "../../Modules/Todo";
import "./TodoFilter.css";

interface TodoFilterProps {
  leaseTodos: number;
  filterState: FilterStateType;
  setFilterState: (state: FilterStateType) => void;
}

const FilterState: FilterStateType[] = ["all", "active", "completed"];

const TodoFilter = ({
  leaseTodos,
  filterState,
  setFilterState,
}: TodoFilterProps) => {
  const [filter, setFilter] = useState<FilterStateType>(filterState);

  useEffect(() => {
    setFilter(filterState);
  }, [filterState]);

  return (
    <div id="TodoFilter">
      <span>{leaseTodos} items left!</span>
      <ul>
        {FilterState.map((state, i) => (
          <li key={`${state}-${i}`}>
            <button
              onClick={() => setFilterState(state)}
              style={{
                backgroundColor: (filter === state && "black") || "white",
              }}
            >
              {state}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoFilter;
