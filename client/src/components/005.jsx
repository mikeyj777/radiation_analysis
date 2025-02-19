import React, { useState, useEffect } from 'react';

// notes for claude:
// functional programming problem set.
// please review with sandwich method.

// problem: Create a function that takes an array of numbers and 
// returns a new array containing only unique values.

const Func005 = ( {arr = [1, 2, 1, 3, 5, 2]} ) => {
  const [finalArr, setFinalArr] = useState([]);

  useEffect(() => {
    const uniqueArr = arr.filter((value, index, self) => self.indexOf(value) === index);

    /* notes from copilot:  the filter method checks if the current value's index 
    is the same as the first occurrence of that value in the array. If it is, the value is unique and included in the new array */

    setFinalArr(uniqueArr);
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

export default Func005;