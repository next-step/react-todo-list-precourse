import React from "react";

// 완료 토글 버튼 컴포넌트: 클릭하여 완료 또는 미완료로 토글
const ToggleCompleteButton = ({ completed, onToggle }) => {
  return (
    <button className="toggle-button" onClick={onToggle}>
      {completed ? "✅" : "⬜"}
    </button>
  );
};

export default ToggleCompleteButton;
