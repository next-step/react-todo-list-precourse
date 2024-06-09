import React from "react";

const ShowCompletedToggle = (condition, lists, setLists) => {
  //condition따라 toggle filter
  // localStorage.getItem()

  setLists((prevLists) => {
    // 기존 localStorage 데이터를 불러옵니다.
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key));
      items.push({
        id: value.id,
        text: value.text,
        completed: value.completed,
      });
    }

    // 업데이트된 항목을 반영합니다.
    const newStoredLists =
      condition === "active"
        ? items.filter((item) => !item.completed)
        : condition === "completed"
        ? items.filter((item) => item.completed)
        : items;

    // localStorage에 업데이트된 목록을 저장합니다.
    newStoredLists.forEach((item) => {
      localStorage.setItem(item.text, JSON.stringify(item));
    });

    return newStoredLists;
  });
};

export default ShowCompletedToggle;
