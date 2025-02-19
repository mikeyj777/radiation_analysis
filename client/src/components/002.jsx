import React, { useState, useEffect } from 'react';

// Write a function that takes an array of numbers and returns the sum of all even numbers in the array.

const Func002 = ( {arr = [1, 4, 9, 16, 25, 30]} ) => {
  const [finalVal, setFinalVal] = useState(0);

  useEffect(() => {
    setFinalVal(arr
      .filter(arr => arr % 2 === 0)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0));
  }, [arr]);

  return (
    <div className="func-container">
      <div className="func-card">
        <h1 className="func-text">Original array: {arr.join(', ')}</h1>
      </div>
      <div className="func-card">
        <h1 className="func-text">Final value: {finalVal}</h1>
      </div>
    </div>
  );
};

export default Func002;