import { useState } from 'react';
import { tuplify } from '../tools/helper'

type UseLocalStorageType<T> =[T, (value: T | ((val: T) => T)) => void];

function useLocalStorage<T>(key: string, initialValue: T) :UseLocalStorageType<T> {
  const [storeValue, setStoreValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      // 这里一般也要留给SDK
      console.log(e);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storeValue) : value;
      setStoreValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (e) {
      console.log(e);
    }
  };
  // return [storeValue, setValue] as const;
  return tuplify(storeValue, setValue);
}

export default useLocalStorage;
