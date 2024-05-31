import "./Footer.css";
import FooterCount from "./FooterCount";
import FooterComplete from "./FooterComplete";

const Footer = ({ todos, setTodos }) => {
  return (
    <div className="footer">
      <FooterCount todos={todos} />
      <FooterComplete setTodos={setTodos} />
    </div>
  );
};

export default Footer;
