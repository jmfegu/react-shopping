import { useState } from "react";

export const useCounter = (initialValue = 10) => {

  const [counter, setCounter] = useState(initialValue)

  const increase = (value = 1) => {
    setCounter(counter + value);
  }

  const decrement = (value = 1) => {
    if (counter - value <= 0) {
      setCounter(0)
    } else {
      setCounter(counter - value);
    };
  }

  const reset = () => {
    setCounter(initialValue);
  }

  return {
    counter,
    increase,
    decrement,
    reset,
  };

}