import React from "react";

const ClearCompleted = (lists, setLists) => {
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

    // 완료된 항목을 필터링합니다.
    const completedItems = items.filter((item) => item.completed);
    const newStoredLists = items.filter((item) => !item.completed);

    // localStorage에서 완료된 항목을 제거합니다.
    completedItems.forEach((item) => {
      localStorage.removeItem(item.text);
    });

    // localStorage에 업데이트된 목록을 저장합니다.
    newStoredLists.forEach((item) => {
      localStorage.setItem(item.text, JSON.stringify(item));
    });

    return newStoredLists;
  });
};

export default ClearCompleted;
