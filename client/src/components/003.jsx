import React, { useState, useEffect } from 'react';

// notes for claude:
// functional programming problem set.
// please review with sandwich method.

// problem:Create a function that takes an array of strings and returns a
// new array containing only the strings that are longer than 5 characters.

const Func003 = ( {arr = ["longer", "words", "are", "kept", "the", "rest", "are", "algorithm", "fodder"]} ) => {
  const [finalArr, setFinalArr] = useState([]);

  useEffect(() => {
    setFinalArr(arr.filter(word => word.length > 5));
  }, [arr]);

  return (
    <div className="func-container">
      <div className="func-card">
        <h1 className="func-text">Original array: {arr.join(', ')}</h1>
      </div>
      <div className="func-card">
        <h1 className="func-text">Final array: {finalArr.join(', ')}</h1>
      </div>
    </div>
  );
};

export default Func003;