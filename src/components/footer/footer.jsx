import "./footer.css";
import FooterCount from "./footer_count";
import FooterComplete from "./footer_complete";

function Footer({ todos, setTodos }) {
  return (
    <div className="footer">
      <FooterCount todos={todos} />
      <FooterComplete setTodos={setTodos} />
    </div>
  );
}

export default Footer;
