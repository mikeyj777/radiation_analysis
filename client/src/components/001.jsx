import React, { useState, useEffect } from 'react';

// Create a function that takes an array of numbers and returns a new array with each number doubled.

const Func001 = ( {arr = [1, 4, 9, 16]} ) => {
  const [doubledArr, setDoubledArr] = useState([]);

  const doubleNumbers = (arr) => arr.map(num => num * 2);

  useEffect(() => {
    setDoubledArr(doubleNumbers(arr));
  }, [arr]);

  return (
    <div className="func-container">
      <div className="func-card">
        <h1 className="func-text">Original array: {arr.join(', ')}</h1>
      </div>
      <div className="func-card">
        <h1 className="func-text">Doubled array: {doubledArr.join(', ')}</h1>
      </div>
    </div>
  );
};

export default Func001;