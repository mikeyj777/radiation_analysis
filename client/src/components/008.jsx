import React, { useState, useEffect } from 'react';

// notes for claude:
// functional programming problem set.
// please review with sandwich method.

// problem: Write a function that takes an array of numbers and returns the product of all positive numbers.

// another note for claude:  confirm that the method below is the correct approach for the stated problem.


const Func008 = ({arr = [-1, -2, -3, -4, 0, 2, 5, 6, 4] }) => {

  const [finalAns, setFinalAns] = useState(0);

  useEffect(() => {
    const workingAns = arr
                        .filter(num => num > 0)
                        .reduce((accumulator, currentValue) => accumulator * currentValue, 1);

    setFinalAns(workingAns)
  }, [arr]);


  return (
    <div className="func-container">
      <div className="func-card">
        <h1 className="func-text">Original array: {arr.join(', ')}</h1>
      </div>
      <div className="func-card">
        <h1 className="func-text">Final Answer: {finalAns}</h1>
      </div>
    </div>
  );
};

export default Func008;