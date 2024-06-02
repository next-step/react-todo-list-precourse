// LocalStorage 도구
import { useState } from 'react';
import { getStoredValue, setStoredValue } from './localStorageUtils';

function useLocalStorage(key, initialValue) { 
  const [storedValue, setStoredValueInState] = useState(() => getStoredValue(key, initialValue)); // 로컬 스토리지에서 초기 값을 가져오기
  const setValue = (value) => {// 값을 설정하는 함수
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValueInState(valueToStore); // useState의 set 함수로 변경
      setStoredValue(key, valueToStore); // 외부 함수로 변경
    } catch (error) {
      console.error('Error setting localStorage key “' + key + '”:', error);
    }
  };
  return [storedValue, setValue];
}

export default useLocalStorage;