import React, { useState, useEffect } from 'react';

// notes for claude:
// functional programming problem set.
// please review with sandwich method.

// problem: Write a function that takes an array of numbers,
// doubles them, and then sums only the doubled numbers that are greater than 10.

const Func006 = ( {arr = [1, 2, 3, 4, 5, 6, 7]} ) => {
  const [finalAns, setFinalAns] = useState(0);

  useEffect(() => {
    const ans = arr
      .map(value => value * 2)
      .reduce((accumulator, currentValue) => {
        let ans = accumulator;
        if (currentValue > 10) {
          ans = accumulator + currentValue;
        }
        return ans;
      },0);

    setFinalAns(ans);
  }, [arr]);

  return (
    <div className="func-container">
      <div className="func-card">
        <h1 className="func-text">Original array: {arr.join(', ')}</h1>
      </div>
      <div className="func-card">
        <h1 className="func-text">Final answer: {finalAns}</h1>
      </div>
    </div>
  );
};

export default Func006;