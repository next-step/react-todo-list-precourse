import "./textbox.css";

const textboxInput = ({ text, setText }) => {
  return (
    <input
      type="text"
      value={text}
      className="input_box"
      placeholder="What needs to be done?"
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export default textboxInput;
