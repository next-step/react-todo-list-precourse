import Filter from "./Filter";
import "../../style/Filter.css";

const FilterContainer = ({ filter, setFilter }) => {
  return (
    <ul className="filter-container">
      <Filter text={"All"} filter={filter} setFilter={setFilter} />
      <Filter text={"Active"} filter={filter} setFilter={setFilter} />
      <Filter text={"Completed"} filter={filter} setFilter={setFilter} />
    </ul>
  );
};
export default FilterContainer;
