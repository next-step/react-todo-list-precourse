import "./Header.css";
import image from "../../../assets/image/image.jpg";
export default function Header() {
  return (
    <div className="header">
      <img src={image} style={{ width: "140px" }} />
      <h1>오늘 할 일</h1>
    </div>
  );
}
