const Filter = ({ text, filter, setFilter }) => {
  return (
    <li
      onClick={() => setFilter(text)}
      style={{
        borderColor: filter === text ? "rgb(56, 56, 180)" : null,
      }}
    >
      {text}
    </li>
  );
};
export default Filter;
