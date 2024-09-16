import React, { useState } from "react";

const Algoritm = () => {
  const [str1, setStr1] = useState("");
  const [str2, setStr2] = useState("");
  const [isAnagram, setisAnagram] = useState(null);

  const normalizeString = (str) => str.toLowerCase().replace(/[^a-z]/g, "");
  const sortString = (str) => {
    return str.split("").sort().join("");
  };

  const handleAnagramWord = () => {
    const normalizedWord1 = normalizeString(str1);
    const normalizedWord2 = normalizeString(str2);
    setisAnagram(sortString(normalizedWord1) === sortString(normalizedWord2));
  };

  return (
    <div>
      <label>1-ci sozu daxil et</label>
      <input
        type="text"
        value={str1}
        onChange={(e) => setStr1(e.target.value)}
      />
      <label>2-ci sozu daxil et</label>
      <input
        type="text"
        value={str2}
        onChange={(e) => setStr2(e.target.value)}
      />
      <button onClick={handleAnagramWord}>Yoxla</button>
      {isAnagram !== null && (
        <p>{isAnagram ? "Sətirlər anagramdır!" : "Sətirlər anagram deyil!"}</p>
      )}
    </div>
  );
};

export default Algoritm;
