import React, { useState } from "react";

const Algoritm = () => {
  //Anagramm////
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

  const [array, setArray] = useState("");
  const [targetSum, setTargetSum] = useState(0);
  const [pairs, setPairs] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let seen = new Set();
    let resultPairs = [];
    const res = array.split(",").map(Number);
    res.forEach((item) => {
      const exsist = targetSum - item;
      if (seen.has(exsist)) {
        resultPairs.push([exsist, item]);
      }
      seen.add(item);
    });
    setPairs(resultPairs);
  };

  return (
    <>
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
          <p>
            {isAnagram ? "Sətirlər anagramdır!" : "Sətirlər anagram deyil!"}
          </p>
        )}
      </div>
      <div>
        <h1>Cütləri tapmaq</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Massiv:</label>
            <input
              type="text"
              value={array}
              onChange={(e) => setArray(e.target.value)}
              placeholder="Məsələn: 2,7,11,15"
            />
          </div>
          <div>
            <label>Hədəf Cəm:</label>
            <input
              type="number"
              value={targetSum}
              onChange={(e) => setTargetSum(e.target.value)}
            />
          </div>
          <button type="submit">Cütləri Tap</button>
        </form>

        <h2>Nəticə:</h2>
        {pairs.length > 0 ? (
          <ul>
            {pairs.map((pair, index) => (
              <li key={index}>
                [{pair[0]}, {pair[1]}]
              </li>
            ))}
          </ul>
        ) : (
          <p>Cüt tapılmadı.</p>
        )}
      </div>
    </>
  );
};

export default Algoritm;
