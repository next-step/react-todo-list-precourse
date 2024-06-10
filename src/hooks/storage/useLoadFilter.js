// 로컬 스토리지에서 필터 상태를 불러오는 훅
import { useEffect } from "react";
import FILTERS from "../../utils/filters";

const useLoadFilter = (setFilter) => {
  useEffect(() => {
    const storedFilter = localStorage.getItem("filter") || FILTERS.ALL;
    setFilter(storedFilter);
  }, [setFilter]);
};

export default useLoadFilter;
