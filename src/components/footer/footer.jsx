import "./footer.css";
import FooterCount from "./footerCount";
import FooterComplete from "./footerComplete";

const footer = ({ todos, setTodos }) => {
  return (
    <div className="footer">
      <FooterCount todos={todos} />
      <FooterComplete setTodos={setTodos} />
    </div>
  );
};

export default footer;
