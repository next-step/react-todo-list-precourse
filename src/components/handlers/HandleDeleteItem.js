import React from "react";

const HandleDeleteItem = (id, lists, setLists) => {
  const filteredItems = lists.filter((item) => item.id !== id);
  setLists(filteredItems);
};

export default HandleDeleteItem;
