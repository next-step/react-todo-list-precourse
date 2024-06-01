const useCurrentDate = () => {
  const date = new Date();
  const dayArray = ["일", "월", "화", "수", "목", "금", "토"];
  const currentDay = date.getDay();
  const today = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${dayArray[currentDay]}요일`;

  return today;
};

export default useCurrentDate;
