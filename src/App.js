import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();

  date.setDate(date.getDate() + count);
  //// handle steps
  function handleStepNext() {
    setStep((curStep) => curStep + 1);
  }

  function handleStepPrevious() {
    setStep((curStep) => curStep - 1);
  }
  //// handle count
  function handleCountNext() {
    setCount((c) => c + step);
  }

  function handleCountPrevious() {
    setCount((c) => c - step);
  }
  return (
    <>
      <div className="step">
        <button onClick={handleStepPrevious}>-</button>
        <p>Step: {step} </p>
        <button onClick={handleStepNext}>+</button>
      </div>
      <div className="count">
        <button onClick={handleCountPrevious}>-</button>
        <p>count: {count} </p>
        <button onClick={handleCountNext}>+</button>
      </div>
      <div className="dateDisplay">
        <span>
          {count === 0
            ? "today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </>
  );
}
