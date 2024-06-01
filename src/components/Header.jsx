import "./styles/Header.css";
import useCurrentDate from "../hooks/useCurrentDate";

const today = useCurrentDate();

const Header = () => {
  return (
    <div className="header">
      <p>TodoList</p>
      <p>{today}</p>
    </div>
  );
};

export default Header;
