import React from "react";
import FilterButton from "./filterButton";
import FILTERS from "../../../utils/filters";

// 전체 필터 버튼 컴포넌트: 모든 할 일을 표시하는 버튼
const AllFilterButton = ({ filter, handleSetFilter }) => {
  return (
    <FilterButton
      isActive={filter === FILTERS.ALL}
      onClick={() => handleSetFilter(FILTERS.ALL)}
    >
      전체
    </FilterButton>
  );
};

export default AllFilterButton;
