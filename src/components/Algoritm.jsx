import React, { useState } from "react";

const Algoritm = () => {
  const [str1, setStr1] = useState("");
  const [str2, setStr2] = useState("");

  return <div>
    <label>1-ci sozu daxil et</label>
    <input type="text" />
    <label>2-ci sozu daxil et</label>
    <input type="text" />
  </div>;
};

export default Algoritm;
