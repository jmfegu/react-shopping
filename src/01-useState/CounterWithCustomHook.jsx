import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {

  const {counter, increase, decrement, reset} = useCounter(20);

  return (
    <>
      <h1>Counter with custom Hook: {counter}</h1>
      <button onClick={() => decrement(11)} className="btn btn-primary">-1</button>
      <button onClick={reset} className="btn btn-primary">Reset</button>
      <button onClick={() => increase(2)} className="btn btn-primary">+1</button>
    </>
  )
}
