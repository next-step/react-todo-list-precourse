import React from "react";
// 필터 버튼 컴포넌트: 활성화 여부에 따라 스타일이 변경되는 버튼
const FilterButton = ({ isActive, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`filter-button ${isActive ? "active" : ""}`}
    >
      {children}
    </button>
  );
};

export default FilterButton;
