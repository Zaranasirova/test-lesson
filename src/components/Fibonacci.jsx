import React, { useState } from "react";

const Fibonacci = () => {
  const [number, setNumber] = useState(0);
  const [fibSeries, setFibSeries] = useState([]);

  const calcualteFibonacciseries = (n) => {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n);
  };
  const handleFibonacciNumber = () => {
    const series = calcualteFibonacciseries(number);
    setFibSeries(series);
  };

  return (
    <div className="fibonacci">
      <label>eded daxil et</label>
      <input
        type="num"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={handleFibonacciNumber}> Hesabla</button>
      <h1>{fibSeries}</h1>
    </div>
  );
};

export default Fibonacci;
