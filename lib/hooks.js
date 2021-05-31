import { useState } from "react";

export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleValueChange(value) {
    setValue(value);
  }

  return [value, handleValueChange];
}

export function useBoolState(initialState = false) {
  const [value, setValue] = useState(initialState);

  function setTrue() {
    setValue(true);
  }

  function setFalse() {
    setValue(false);
  }

  return [value, setTrue, setFalse];
}