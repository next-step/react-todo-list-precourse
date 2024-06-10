// 로컬 스토리지에 필터 상태를 저장하는 훅
import { useEffect } from "react";

const useSaveFilter = (filter) => {
  useEffect(() => {
    localStorage.setItem("filter", filter);
  }, [filter]);
};

export default useSaveFilter;
