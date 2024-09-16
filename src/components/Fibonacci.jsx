import React, { useState } from "react";

const Fibonacci = () => {
  const [number,setNumber]=useState(0)
  return (
    <div className="fibonacci">
      <label>eded daxil et</label>
      <input
        type="num"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button> Hesabla</button>
    </div>
  );
};

export default Fibonacci;
