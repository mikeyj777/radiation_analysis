import React, { useState, useEffect } from 'react';
import { useFetcher } from 'react-router-dom';

// notes for claude:
// functional programming problem set.
// please review with sandwich method.  focus on the functional programming portion of the solution.  
// assume the rest of the react component is for display purposes.   

// problem: Create a function that finds the sum of all Fibonacci numbers below a given limit that are even.

// another note for claude:  confirm that the method below is the correct approach for the stated problem.


const Func011 = ({ upperLim = 200 }) => {

  const [finalAns, setFinalAns] = useState(0);
  const [fibs, setFibs] = useState([]);

  const fibSeqGenerator = () => {
    const seq = Array.from({ length: upperLim})
      .reduce((seq) => {
        const nexFib = seq[seq.length - 2] + seq[seq.length - 1];
        return nexFib < upperLim ? [...seq, nexFib] : seq;
      }, [0, 1]);
      return seq;
  }

  useEffect(() => {

    setFibs(fibSeqGenerator());

  },[upperLim] )

  useEffect(() => {

    setFinalAns(
      fibs
        .filter(elem => elem % 2 === 0)
        .filter(elem => elem < upperLim)
        .reduce((accum, currValue) => accum + currValue, 0)
    );

  }, [fibs])

  return (
    <div className="func-container">
      <div className="func-card">
        <h1 className="func-text">upper limit: {upperLim}</h1>
      </div>
      <div className="func-card">
        <h1 className="func-text">fibonnachos: {fibs.join(', ')}</h1>
      </div>
      <div className="func-card">
        <h1 className="func-text">
          sum of even fibs: {finalAns}
        </h1>
      </div>
    </div>
  );
};

export default Func011;