import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function useStoreState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {
    const storage = localStorage.getItem(key);
    if (storage) {
      return JSON.parse(storage);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useStoreState;
