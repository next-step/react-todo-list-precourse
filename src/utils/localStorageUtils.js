// useLocalStorage의 도구
export const getStoredValue = (key, initialValue) => {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  } catch (error) {
    console.error('Error reading localStorage key “' + key + '”:', error);
    return initialValue;
  }
};
