import React, { useState, useEffect } from 'react';

// notes for claude:
// functional programming problem set.
// please review with sandwich method.  focus on the functional programming portion of the solution.  
// assume the rest of the react component is for display purposes.   

// problem: Write a function that takes an array of numbers and returns the second largest unique value.

// another note for claude:  confirm that the method below is the correct approach for the stated problem.


const Func010 = ({arr = [1, 2, 5, 2, 6, 1] }) => {

  const [finalAns, setFinalAns] = useState(0);

  useEffect(() => {
    const workingAns = arr
                        .filter((value, index, self) => self.indexOf(value) === index)
                        .sort()
                        .reverse();

    console.log(workingAns);
    setFinalAns(workingAns[1]);
  }, [arr]);


  return (
    <div className="func-container">
      <div className="func-card">
        <h1 className="func-text">Original array: {arr}</h1>
      </div>
      <div className="func-card">
        <h1 className="func-text">
          {finalAns}
        </h1>
      </div>
    </div>
  );
};

export default Func010;