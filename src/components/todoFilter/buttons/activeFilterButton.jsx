import React from "react";
import FilterButton from "./filterButton";
import FILTERS from "../../../utils/filters";

// 활성 필터 버튼 컴포넌트: 완료되지 않은 할 일을 필터링하는 버튼
const ActiveFilterButton = ({ filter, handleSetFilter }) => {
  return (
    <FilterButton
      isActive={filter === FILTERS.ACTIVE}
      onClick={() => handleSetFilter(FILTERS.ACTIVE)}
    >
      진행 중
    </FilterButton>
  );
};

export default ActiveFilterButton;
