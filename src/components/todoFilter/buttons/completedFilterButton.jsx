import React from "react";
import FilterButton from "./filterButton";
import FILTERS from "../../../utils/filters";

// 완료 필터 버튼 컴포넌트: 완료된 할 일을 필터링하는 버튼
const CompletedFilterButton = ({ filter, handleSetFilter }) => {
  return (
    <FilterButton
      isActive={filter === FILTERS.COMPLETED}
      onClick={() => handleSetFilter(FILTERS.COMPLETED)}
    >
      완료
    </FilterButton>
  );
};

export default CompletedFilterButton;
