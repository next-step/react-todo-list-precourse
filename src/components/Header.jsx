import "./styles/Header.css";

const date = new Date();
const dayArray = ["일", "월", "화", "수", "목", "금", "토"];
const currentDay = date.getDay();

const Header = () => {
  return (
    <div className="Header">
      <p>TodoList</p>
      <p>
        {`${date.getFullYear()}년 ${
          date.getMonth() + 1
        }월 ${date.getDate()}일 ${dayArray[currentDay]}요일`}
      </p>
    </div>
  );
};

export default Header;
