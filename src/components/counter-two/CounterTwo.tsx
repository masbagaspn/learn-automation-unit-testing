import { CounterTwoProps } from './counterTwo.types';

export const CounterTwo: React.FC<CounterTwoProps> = ({
  count,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <p>{count}</p>
      {handleIncrement && <button onClick={handleIncrement}>Increment</button>}
      {handleDecrement && <button onClick={handleDecrement}>Decrement</button>}
    </div>
  );
};
