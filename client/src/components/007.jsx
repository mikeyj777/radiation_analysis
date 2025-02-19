import React, { useState, useEffect } from 'react';

// notes for claude:
// functional programming problem set.
// please review with sandwich method.

// problem: Create a function that takes an array of objects with 'name' and 'score' properties, 
// and returns an array of names of people who scored above 80, sorted alphabetically.

class Result {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

const Func007 = () => {
  
  const generateResults = () => {
    const resultsArr = [];
    for (let i = 0; i < 10; i++) {
      resultsArr.push(new Result("Result " + i, 60 + Math.floor(Math.random() * 40)));
    }
    return resultsArr;
  };
  
  const [results, setResults] = useState([]);
  const [finalArr, setFinalArr] = useState([]);

  useEffect(() => {
    setResults(generateResults());
  }, []);

  useEffect(() => {
    const arr = results
                  .filter(result => result.score > 80)
                  .map(result => result.name)
                  .sort();
                
    setFinalArr(arr);
  }, [results]);

  return (
    <div className="func-container">
      <div className="func-card">
        <h1 className="func-text">Original array: {results.map(result => result.score).join(', ')}</h1>
      </div>
      <div className="func-card">
        <h1 className="func-text">Final array: {finalArr.join(', ')}</h1>
      </div>
    </div>
  );
};

export default Func007;