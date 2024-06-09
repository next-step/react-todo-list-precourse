import FilterContainer from "./FilterContainer";
import { activeNum, handleClear } from "../../util/todoUtilFunc";
import "../../style/ListBottom.css";
const ListBottom = ({ todos, setTodos, filter, setFilter }) => {
  return (
    <div className="list-bottom">
      <span className="left">{activeNum(todos)}개 남음!</span>
      <FilterContainer filter={filter} setFilter={setFilter} />
      <button className="clear" onClick={() => handleClear(todos, setTodos)}>
        Clear completed
      </button>
    </div>
  );
};
export default ListBottom;
