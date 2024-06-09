import React from "react";
import "../Styles/TodoTemplate.css";

// 버튼 클릭을 통해 Todo Status에 따라 Filtering해주는 컴포넌트이다.
const Filters = ({ filter, setFilter }) => {
  return (
    <div className="filters-container">
      <button onClick={() => setFilter("all")}>
        All
      </button>
      <button onClick={() => setFilter("completed")}>
        Completed
      </button>
      <button onClick={() => setFilter("active")}>
        Active
      </button>
    </div>
  )

}
export default Filters;